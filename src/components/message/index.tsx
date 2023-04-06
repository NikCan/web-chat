import {FC} from 'react'

type Props = {
  message: string
}
export const Message: FC<Props> = ({message}) => {
  return (
    <div>
      <img src="https://placehold.co/50" alt=""/>
      <span>Nikita </span>
      <span>{message}</span>
    </div>
  )
}