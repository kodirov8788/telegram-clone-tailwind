import { useState } from "react"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { ChatContext } from "../context/ChatContext"
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect } from "react"
import { db } from "../firebase/firebaseConfig"

const Chatdetails = () => {
    const style = {
        detailBox: "w-full h-full bg-transparent p-[5px] overflow-y-scroll",
        detail_container: "w-full h-[70px] flex items-center rounded-[10px] px-[5px] hover:bg-[#2C2C2C] cursor-[pointer]",
        detail_img: "rounded-[50%] w-[55px] h-[55px] object-cover",
        deatilwrap: "flex-[1] h-full flex-col flex justify-evenly py-[10px] ml-[10px]",
        detail_text: "text-white text-[14px] font-medium",
        detail_text2: "text-[12px] text-[rgb(170,170,170)]"

    }
    const { currentUser } = useContext(AuthContext)
    const { dispatch } = useContext(ChatContext)
    const [chat, setChat] = useState()
    console.log("chat user>>", chat)
    useEffect(() => {
        const getRealtime = () => {
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                setChat(doc.data());
            });
            return () => {
                unsub()
            }
        }
        currentUser.uid && getRealtime()
    }, [currentUser.uid])


    return (
        <div className={style.detailBox}>
            {
                // chatInfo.map((chat) => (
                //     <div key={chat.id} className={style.detail_container}>
                //         <img src={chat.chatImg} alt="" className={style.detail_img} />
                //         <div className={style.deatilwrap}>
                //             <p className={style.detail_text}>{chat.chatName}</p>
                //             <p className={style.detail_text2}>{chat.recieved}</p>
                //         </div>
                //     </div>
                // ))
            }
        </div>
    )
}

export default Chatdetails