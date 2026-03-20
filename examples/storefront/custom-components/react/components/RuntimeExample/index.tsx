import React from 'react'
import { useRuntime } from 'vtex.render-runtime'
import { useCssHandles } from 'vtex.css-handles'

const HANDLES = ['container', 'info'] as const

const RuntimeExample: StoreFrontFC = () => {
  const { account, workspace, deviceInfo, page } = useRuntime()
  const { handles } = useCssHandles(HANDLES)

  return (
    <div className={handles.container}>
      <div className={handles.info}>Account: {account}</div>
      <div className={handles.info}>Workspace: {workspace}</div>
      <div className={handles.info}>Device: {deviceInfo.type}</div>
      <div className={handles.info}>Current Page: {page}</div>
    </div>
  )
}

RuntimeExample.schema = {
  title: 'Exemplo de Runtime',
  type: 'object',
  properties: {},
}

export default RuntimeExample
