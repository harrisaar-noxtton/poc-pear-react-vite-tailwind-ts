import { FC } from 'react'
import { MessageEntry } from './MessageEntry'

interface Message {
  createdAt: string
  authorId: string
  messageText: string
}

const messages: Message[] = [
  {
    createdAt: '2024-01-15T10:30:00Z',
    authorId: 'user1',
    messageText: 'Hello everyone!'
  },
  {
    createdAt: '2024-01-15T10:31:00Z',
    authorId: 'user2',
    messageText: 'How is everyone doing today?'
  },
  {
    createdAt: '2024-01-15T10:32:00Z',
    authorId: 'user3',
    messageText: 'Great to see you all here!'
  }
]

export const MessagesList: FC = () => (
  <div className="w-full max-w-2xl space-y-4 p-4">
    {messages.map((message, index) => (
      <MessageEntry key={index} message={message} />
    ))}
  </div>
)
