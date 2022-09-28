import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'


function Message({ message }) {
    const { data } = useContext(ChatContext)
    const { currentUser } = useContext(AuthContext)

    const ref = useRef()
    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" })

    }, [message])

    const style = {
        mainChat: "flex flex-col-reverse  px-[2%]",
        mainChatContainer: "flex text-[24px] items-end overflow-x-hidden",
        rightchat: "flex-row-reverse  ml-[10%]",
        messageContainer: `flex flex-col w-[85%]   ${message.senderId === currentUser.uid ? "items-end " : ""}`,

        leftchat_h1: "bg-red-400 text-white w-fit    p-2 rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] ",
        rightchat_h1: ` m-[3px] ${message?.text && "bg-yellow-400"} text-white w-fit p-2 rounded-tl-[10px] rounded-br-[10px] rounded-bl-[10px] ${message.senderId === currentUser.uid ? "text-right" : ""}`,
        img: "w-[200px] h-[200px]",
        avatar: "w-[50px] h-[50px] rounded-full m-2",
        messageImg: "w-[300px] rounded",

    }

    return (
        <div className={style.mainChat} >
            <div ref={ref} className={`${style.mainChatContainer} ${message.senderId === currentUser.uid ? style.rightchat : ""
                } `} >
                <img className={style.avatar} src={message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} alt="" />
                <div className={style.messageContainer} >
                    <img src={message.img} alt="" className={style.messageImg} />
                    <h1 className={message.senderId === currentUser.uid ? style.rightchat_h1 : style.leftchat_h1}>{message.text}</h1>
                </div>



            </ div>
        </div>
    )
}

export default Message
