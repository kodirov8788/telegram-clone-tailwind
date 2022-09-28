import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { chatInfo } from '../static/telegramStatic'
import { db } from "../firebase/firebaseConfig"
import { ChatContext } from '../context/ChatContext'

function Messages() {
    const [messages, setMessages] = useState([])
    const style = {
        appear: "w-9/12 hidden sm:flex h-full flex-col justify-between",
        chatTop: "w-full h-[55px] bg-[#212121] flex items-center justify-betweeen px-[20px]",
        sides: "flex h-full items-center",
        innerSide: "flex flex-col justify-between pl-[10px]",
        chatImgTop: "rounded-[50%] w-[42px] h-[42px] object-cover",
        nameOf: "text-white text-[16px] font-medium",
        typeOf: "text-[rgb(170,170,170)] text-[12px] font-normal",
        mainChat: "w-full h-full overflow-y-scroll flex flex-col-reverse",
        leftchat: "w-10/12 p-[10px] flex flex-col",
        leftchat_h1: "bg-red-400 text-white w-fit  p-2 rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]",
        rightchat: "w-full p-[10px] flex justify-end",
        rightchat_h1: "bg-yellow-400 text-white w-fit w-10/12 p-2 rounded-tl-[10px] rounded-br-[10px] rounded-bl-[10px] ",
        chat_footer: "w-full h-[100px] bg-blue-400",
    }
    const { data } = useContext(ChatContext)
    console.log("chat ID", data.chatId);
    useEffect(() => {
        const Fetchdata = () => {
            onSnapshot(doc(db, "chats", data.chatId), (doc => {
                console.log("doc >>", doc)
                return doc.exists() && setMessages(doc.data())
                // console.log("doc data", doc.data())
            }))
        }
        return () => {
            data.chatId && Fetchdata()
        }
    }, [data.chatId])
    console.log("messages >", messages);
    return (
        <div>
            {/* {
                messages?.map((chat) => (
                    <div className="" key={chat.id}>
                        <div className={style.leftchat}>
                            <h1 className={style.leftchat_h1}>{chat.text}</h1>
                        </div>
                        <div className={style.rightchat}>
                            <h1 className={style.rightchat_h1}>{chat.send}</h1>
                        </div>
                    </div>))
            } */}
        </div>
    )
}

export default Messages