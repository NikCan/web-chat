import {useEffect} from "react";
import {appActions} from "../app/appSlice";
import {useAppDispatch} from "./use-app-dispatch";

export const useChat = () => {
  const dispatch = useAppDispatch()
  const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

  const sendMessage = (newMessage: string) => {
    if (newMessage) {
      ws.send(newMessage)
    }
  }
  useEffect(() => {
    ws.onmessage = (ev) => {
      dispatch(appActions.setUsers({users: JSON.parse(ev.data)}))
    }
  }, [])

  return {
    sendMessage
  }
}