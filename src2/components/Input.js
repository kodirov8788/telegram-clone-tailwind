import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
import { MdAttachFile } from "react-icons/md"
import { doc, Timestamp, updateDoc, arrayUnion } from 'firebase/firestore'
import { db } from "../firebase/firebaseConfig"

function Input() {
    const style = {
        chat_footer: "w-full h-[100px] bg-blue-400 sticky bottom-0 flex items-center",
        send: "flex ",
        input: "flex-[1] h-4/5 text-[30px] indent-3 bg-transparent outline-none placeholder:text-white text-white",
        file: "w-fit px-[20px] hover:bg-gray-300 duration-300  relative rounded",
        fileInput: "absolute top-0 w-full h-full opacity-0 cursor-pointer",
        icon: "text-[50px] rotate-[45deg]",
        sendBtn: "border hover:bg-red-200 rounded text-[26px]  px-[30px] py-2 duration-300",
    }
    const [text, setText] = useState("")
    const [img, setImg] = useState(null)
    const { data } = useContext(ChatContext)
    const { currentUser } = useContext(AuthContext)
    // console.log(data)
    const HundleSend = async () => {
        await updateDoc(doc(db, "chats", data.chatId), {
            messages: arrayUnion({
                text: text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
            })
        })
        console.log("jonadi");
    }
    return (
        <div className={style.chat_footer}>
            <input type="text" className={style.input} placeholder='text' value={text} onChange={(e) => setText(e.target.value)} />
            <div className={style.send}>
                <div className={style.file}>
                    <MdAttachFile className={style.icon} />
                    <input type="file" className={style.fileInput}
                        onChange={(e) => setImg(e.target.files[0])}
                    />
                </div>
                <button className={style.sendBtn}
                    onClick={HundleSend}>Send</button>
            </div>
        </div>
    )
}

export default Input
