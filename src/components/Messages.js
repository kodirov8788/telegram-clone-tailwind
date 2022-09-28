import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { ChatContext } from '../context/ChatContext'
import { firestore } from '../firebase'
import Message from './Message'
function Messages() {
    const style = {
        mainContainer: "h-[80%] flex flex-col justify-end",

    }
    const [messages, setMessages] = useState([])
    const { data } = useContext(ChatContext)
    useEffect(() => {
        const unSub = onSnapshot(doc(firestore, "chats", data.chatId), (doc) => {
            doc?.exists && setMessages(doc?.data()?.messages)
        })
        return () => {
            unSub()
        }
    }, [data.chatId])
    // console.log(messages)
    return (
        <div className={style.mainContainer} >
            {messages?.map((message) => (
                <Message message={message} key={message.id} />
            ))}
        </div>
    )
}

export default Messages