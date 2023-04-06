import {FC} from 'react'
import {Message} from '../message'

type Props = {
  messages: string[]
}
export const List: FC<Props> = ({messages}) => {
  const list = messages.map((m, i) => <Message key={i} message={m}/>)
  return (
    <div style={{display: "flex", flexDirection: 'column', overflow: 'auto', height: '100%'}}>
      {list}
    </div>
  )
}