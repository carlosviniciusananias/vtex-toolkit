import { useRef, useState, useMemo, useCallback } from 'react'
import { RichText } from '../../molecules/RichText'
import useDeviceInfo from '../../../hooks/useDeviceInfo'
import styles from './index.module.scss'

interface CollapsibleContentProps {
  title?: string
  subtitle?: string
  content?: string
  showMoreOnDesktop?: boolean
  showMoreOnMobile?: boolean
  collapsedHeightDesktop?: number
  collapsedHeightMobile?: number
  className?: string
  style?: React.CSSProperties
  marginTopDesktop?: string
  marginBottomDesktop?: string
  marginTopMobile?: string
  marginBottomMobile?: string
  expandLabel?: string
  collapseLabel?: string
}

const DEFAULT_COLLAPSED_HEIGHT = {
  desktop: 250,
  mobile: 175,
} as const

const DEFAULT_MARGIN = '0px'

const DEFAULT_LABELS = {
  expand: 'Show more',
  collapse: 'Show less',
} as const

const CollapsibleContent: React.FC<CollapsibleContentProps> = ({
  title,
  subtitle,
  content,
  showMoreOnDesktop = false,
  showMoreOnMobile = false,
  collapsedHeightDesktop = DEFAULT_COLLAPSED_HEIGHT.desktop,
  collapsedHeightMobile = DEFAULT_COLLAPSED_HEIGHT.mobile,
  className,
  style,
  marginTopDesktop = DEFAULT_MARGIN,
  marginBottomDesktop = DEFAULT_MARGIN,
  marginTopMobile = DEFAULT_MARGIN,
  marginBottomMobile = DEFAULT_MARGIN,
  expandLabel = DEFAULT_LABELS.expand,
  collapseLabel = DEFAULT_LABELS.collapse,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const isMobile = useDeviceInfo()

  const toggleExpanded = useCallback((event: React.MouseEvent) => {
    event.preventDefault()
    setIsExpanded((prev) => !prev)
  }, [])

  const config = useMemo(
    () => ({
      collapsedHeight: isMobile
        ? collapsedHeightMobile
        : collapsedHeightDesktop,
      marginTop: isMobile ? marginTopMobile : marginTopDesktop,
      marginBottom: isMobile ? marginBottomMobile : marginBottomDesktop,
      shouldShowToggle: isMobile ? showMoreOnMobile : showMoreOnDesktop,
    }),
    [
      isMobile,
      collapsedHeightMobile,
      collapsedHeightDesktop,
      marginTopMobile,
      marginTopDesktop,
      marginBottomMobile,
      marginBottomDesktop,
      showMoreOnMobile,
      showMoreOnDesktop,
    ],
  )

  const containerStyle = useMemo(
    () => ({
      marginTop: config.marginTop,
      marginBottom: config.marginBottom,
    }),
    [config.marginTop, config.marginBottom],
  )

  const contentStyle = useMemo(() => {
    if (!isExpanded && config.shouldShowToggle) {
      return {
        maxHeight: `${config.collapsedHeight}px`,
        overflow: 'hidden' as const,
      }
    }
    return {
      maxHeight: 'none' as const,
      overflow: 'auto' as const,
    }
  }, [isExpanded, config.shouldShowToggle, config.collapsedHeight])

  const buttonLabel = isExpanded ? collapseLabel : expandLabel

  if (!title && !subtitle && !content) {
    return null
  }

  return (
    <div
      style={containerStyle}
      className={className ?? styles.collapsibleContainer}
    >
      <div
        data-testid="collapsible-content"
        ref={contentRef}
        className={styles.content}
        style={contentStyle}
      >
        {title && (
          <RichText style={style} content={title} className={styles.title} />
        )}
        {subtitle && (
          <RichText
            style={style}
            content={subtitle}
            className={styles.subtitle}
          />
        )}
        {content && (
          <RichText style={style} content={content} className={styles.text} />
        )}
      </div>

      {config.shouldShowToggle && (
        <div
          data-testid="toggle-button-wrapper"
          className={styles.toggleButtonWrapper}
        >
          <button
            data-testid="toggle-button"
            className={styles.toggleButton}
            onClick={toggleExpanded}
            type="button"
            title={buttonLabel}
            aria-label={buttonLabel}
            aria-expanded={isExpanded}
          >
            {buttonLabel}
          </button>
        </div>
      )}
    </div>
  )
}

export default CollapsibleContent
