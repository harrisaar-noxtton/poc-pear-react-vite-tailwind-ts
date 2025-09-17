import { FC } from 'react'

interface Message {
  createdAt: string
  authorId: string
  messageText: string
}

interface MessageEntryProps {
  message: Message
}

export const MessageEntry: FC<MessageEntryProps> = ({ message }) => (
  <div className="rounded-lg bg-gray-800 p-4 text-white">
    <div className="mb-2 flex justify-between text-sm text-gray-400">
      <span>{message.authorId}</span>
      <span>{new Date(message.createdAt).toLocaleTimeString()}</span>
    </div>
    <p>{message.messageText}</p>
  </div>
)
