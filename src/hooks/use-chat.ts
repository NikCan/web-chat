import {useState} from "react";

export const useChat = () => {
    const [messages, setMessages] = useState<string[]>([])

    const sendMessage = (newMessage: string) => {
        newMessage && setMessages([...messages, newMessage])
    }

    return {
        messages, sendMessage
    }
}