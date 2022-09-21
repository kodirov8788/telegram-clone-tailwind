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
    const { dispatch, data } = useContext(ChatContext)
    console.log("data >>>", data);
    const [chat, setChat] = useState([])
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

    const HundleChangeUser = (argument) => {
        dispatch({ type: "CHANGE_USER", payload: argument })
    }
    console.log("chat user>>", Object.entries(chat))

    return (
        <div className={style.detailBox}>
            {
                Object.entries(chat).map((chat) => (
                    <div key={chat[0]} className={style.detail_container} onClick={() => HundleChangeUser(chat[1].userInfo)}>
                        <img src={chat[1].userInfo.photoURL} alt="" className={style.detail_img} />
                        <div className={style.deatilwrap}>
                            <p className={style.detail_text}>{chat[1].userInfo.displayName}</p>
                            <p className={style.detail_text2}>{chat.recieved}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Chatdetails