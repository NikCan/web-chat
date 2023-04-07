import {FC} from 'react'
import {UserType} from "../../app/appSlice";

type Props = {
  user: UserType
}
export const Message: FC<Props> = ({user}) => {
  return (
    <div>
      <div>
        <img src={user.photo || "https://placehold.co/50"} style={{width: '50px'}} alt="photo"/>
        <span>{user.userName}</span>
      </div>
      <span style={{wordBreak: 'break-all', width: '100%'}}>{user.message}</span>
    </div>
  )
}