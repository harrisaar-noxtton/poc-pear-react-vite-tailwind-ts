import { FC } from 'react'
import { MessagesList } from './MessagesList'

export const App: FC = () => (
  <div className="flex h-full w-full items-center justify-center">
    <MessagesList />
  </div>
)
