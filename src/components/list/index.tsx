import {FC} from 'react'
import {Message} from '../message'
import {useAppSelector} from "../../hooks/use-app-selector";

type Props = {}
export const List: FC<Props> = () => {
  const users = useAppSelector(state => state.app.users)

  const list = users.map((u, i) => <Message key={i} user={u}/>)
  return (
    <div style={{display: "flex", flexDirection: 'column-reverse', overflow: 'auto', height: '100%'}}>
      <div style={{display: "flex", flexDirection: 'column', justifyContent: 'flex-end'}}>
        {list}
      </div>
    </div>
  )
}