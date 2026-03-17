import { SectionOverride } from '@faststore/core'
import BreadcrumbCustom from '../organisms/Breadcrumb'

const BreadcrumbWrapper = () => {
  return <BreadcrumbCustom />
}

const override: SectionOverride = {
  section: 'Breadcrumb',
  components: {
    Breadcrumb: { Component: BreadcrumbWrapper },
  },
}

export { override }
