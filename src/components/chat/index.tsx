import {FC, memo} from 'react'
import {Input} from '../input'
import {List} from '../list'
import {useChat} from "../../hooks/use-chat";

export const Chat: FC = memo(() => {
  const {messages, sendMessage} = useChat()

  return (
    <>
      <div style={{height: '300px'}}>
        <List messages={messages}/>
      </div>
      <Input sendMessage={sendMessage}/>
    </>
  )
})