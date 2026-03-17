import React from 'react'
import { Icon } from 'vtex.store-icons'
import { applyModifiers, useCssHandles } from 'vtex.css-handles'
import classNames from 'classnames'

import { StoreFrontFC } from '../../typings/store-front'

interface BreadcrumbItemProps {
  position: number
  name: string
  href: string
  caretIconSize: number
  homeIconSize: number
}

const CSS_HANDLES: readonly string[] = [
  'breadcrumb-item__link',
  'breadcrumb-item__homeLink',
  'breadcrumb-item__arrow',
]

/**
 * @description Component that render each item on breadcrumb
 * @version 1.0.0
 * @since 0.1.0
 */
const BreadcrumbItem: StoreFrontFC<BreadcrumbItemProps> = ({
  position,
  name,
  href,
  caretIconSize,
  homeIconSize,
}) => {
  const { handles } = useCssHandles(CSS_HANDLES)

  return (
    <li
      itemProp="itemListElement"
      itemScope
      itemType="https://schema.org/ListItem"
      className={classNames(
        applyModifiers(handles['breadcrumb-item__arrow'], position.toString()),
        'ph2 c-muted-2',
      )}
    >
      {name ? (
        <>
          <Icon id="breadcrumb-arrow" size={caretIconSize} viewBox="0 0 8 16" />
          <a
            itemProp="item"
            href={href}
            className={classNames(
              applyModifiers(
                handles['breadcrumb-item__link'],
                position.toString(),
              ),
              'dib pv1 link ph3 c-muted-2 hover-c-link',
            )}
          >
            <span itemProp="name">{name}</span>
          </a>
        </>
      ) : (
        <a
          itemProp="item"
          href={href}
          className={classNames(
            handles['breadcrumb-item__homeLink'],
            handles['breadcrumb-item__link'],
            'dib pv1 link ph2 c-muted-2 hover-c-link v-mid',
          )}
        >
          <span className="dn" itemProp="name">
            home
          </span>
          <Icon id="breadcrumb-icon" size={homeIconSize} viewBox="0 0 24 24" />
        </a>
      )}
      <meta itemProp="position" content={position.toString()} />
    </li>
  )
}

export default BreadcrumbItem
