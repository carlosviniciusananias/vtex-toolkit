import React from 'react'
import CollapsibleSection from '../components/CollapsibleSection'

interface Props {
  title: string
  content: string
}

const CustomSection = ({ title, content }: Props) => {
  return (
    <section className="my-section">
      <CollapsibleSection title={title}>
        <p>{content}</p>
      </CollapsibleSection>
    </section>
  )
}

export default CustomSection
