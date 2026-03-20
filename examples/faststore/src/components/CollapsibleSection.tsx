import React from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@faststore/ui'

interface Props {
  title: string
  children: React.ReactNode
}

const CollapsibleSection = ({ title, children }: Props) => {
  return (
    <Collapsible>
      <CollapsibleTrigger>{title}</CollapsibleTrigger>
      <CollapsibleContent>{children}</CollapsibleContent>
    </Collapsible>
  )
}

export default CollapsibleSection
