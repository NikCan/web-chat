import {ChangeEvent, KeyboardEvent, FC, useState, memo} from 'react'

type Props = {
  sendMessage: (message: string) => void
}

export const Input: FC<Props> = memo(({sendMessage}) => {
  const [message, setMessage] = useState<string>('')
  const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.currentTarget.value)
  const clickHandler = () => {
    sendMessage(message.trim())
    setMessage('')
  }
  const keyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    e.key === 'Enter' && clickHandler()
  }
  return (
    <div style={{display:'flex', height: '50px'}}>
      <textarea value={message} onKeyDown={keyDownHandler} onChange={changeHandler}/>
      <button onClick={clickHandler}>Send</button>
    </div>
  )
})