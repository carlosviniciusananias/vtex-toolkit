import React from 'react'
import { useRenderSession } from 'vtex.session-client'
import { useCssHandles } from 'vtex.css-handles'

const HANDLES = ['container', 'welcomeMessage'] as const

const SessionExample: StoreFrontFC = () => {
  const { session, loading } = useRenderSession()
  const { handles } = useCssHandles(HANDLES)

  if (loading || !session) {
    return null
  }

  const firstName = session.namespaces?.profile?.firstName?.value
  const isAuthenticated = session.namespaces?.profile?.isAuthenticated?.value === 'true'

  return (
    <div className={handles.container}>
      <p className={handles.welcomeMessage}>
        {isAuthenticated ? `Olá, ${firstName}!` : 'Bem-vindo, visitante!'}
      </p>
    </div>
  )
}

SessionExample.schema = {
  title: 'Exemplo de Sessão',
  type: 'object',
  properties: {},
}

export default SessionExample
