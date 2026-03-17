import React, { useMemo } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { useRuntime } from 'vtex.render-runtime'
import { useDevice } from 'vtex.device-detector'
import classNames from 'classnames'

import { getNavigationList } from '../../../utils'
import BreadcrumbItem from './BreadcrumbItem'
import { StoreFrontFC } from '../../typings/store-front'

interface BreadcrumbProps {
  showOnMobile?: boolean
  homeIconSize?: number
  caretIconSize?: number
}

const CSS_HANDLES: readonly string[] = ['breadcrumb', 'breadcrumb__wrapper']

/**
 * @description render component breadcrumb custom
 * @param props React props
 * @param props.showOnMobile should render on mobile
 * @param props.homeIconSize icon size for home
 * @param props.caretIconSize icon size for '>'
 * @version 1.0.0
 * @since 0.1.0
 */
const Breadcrumb: StoreFrontFC<BreadcrumbProps> = ({
  showOnMobile = true,
  homeIconSize = 24,
  caretIconSize = 16,
}) => {
  const { handles } = useCssHandles(CSS_HANDLES)
  const { isMobile } = useDevice()

  const {
    route: { path },
  } = useRuntime()

  const shouldBeRendered = (showOnMobile && isMobile) || !isMobile

  const navigationList = useMemo(() => {
    return getNavigationList(path)
  }, [path])

  if (!navigationList.length || !shouldBeRendered) {
    return null
  }

  const breadcrumbList = [
    {
      name: '',
      href: '/',
    },
    ...navigationList,
  ]

  return (
    <div
      data-testid="breadcrumb"
      className={classNames(handles.breadcrumb, 'pv3')}
    >
      <ul
        className={classNames(
          handles.breadcrumb__wrapper,
          'list ma0 pa0 flex items-center',
        )}
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {breadcrumbList.map(({ name, href }, index) => {
          const position = index + 1

          return (
            <BreadcrumbItem
              key={position}
              name={decodeURIComponent(name)}
              position={position}
              href={href}
              homeIconSize={homeIconSize}
              caretIconSize={caretIconSize}
            />
          )
        })}
      </ul>
    </div>
  )
}

Breadcrumb.schema = {
  title: 'Breadcrumb custom',
  description:
    'Breadcrumb custom usado em páginas que não aceitam o nativo VTEX',
  type: 'object',
  properties: {
    showOnMobile: {
      title: 'Exibir no mobile',
      description: 'Ocultar ou exibir no mobile',
      type: 'boolean',
      default: true,
    },
    caretIconSize: {
      title: 'Tamanho do ícone de seta',
      description:
        'Valor opcional, usado para aumentar o tamanho do ícone de seta',
      type: 'number',
      default: 16,
    },
    homeIconSize: {
      title: 'Tamanho do ícone da home',
      description:
        'Valor opcional, usado para aumentar o tamanho do ícone da home',
      type: 'number',
      default: 24,
    },
  },
}

export default Breadcrumb
