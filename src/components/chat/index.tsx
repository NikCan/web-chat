import {FC, memo} from 'react'
import {Input} from '../input'
import {List} from '../list'
import {useChat} from "../../hooks/use-chat";

export const Chat: FC = memo(() => {
  const {sendMessage} = useChat()

  return (
    <>
      <div style={{height: '350px'}}>
        <List/>
      </div>
      <Input sendMessage={sendMessage}/>
    </>
  )
})