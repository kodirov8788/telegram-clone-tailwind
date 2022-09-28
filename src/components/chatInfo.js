import { useContext, useEffect, useState } from "react"
import { chatInfo } from "../static/telegramStatic"
import { doc, onSnapshot } from "firebase/firestore";
import { firestore } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
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
    const [chats, setChats] = useState([])
    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(firestore, "userChats", currentUser.uid), (doc) => {
                setChats(doc.data())
            });
            return () => {
                unsub()
            }
        }
        currentUser.uid && getChats()
    }, [currentUser.uid])

    const HundleSelect = (ee) => {
        dispatch({ type: "CHANGE_USER", payload: ee })
    }
    // console.log("chats", Object.entries(chats));
    return (
        <div className={style.detailBox}>
            {
                Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date).map((chat) => (
                    <div key={chat[0]} className={style.detail_container} onClick={() => HundleSelect(chat[1].userInfo)}>
                        <img src={chat[1].userInfo?.photoURL} alt="" className={style.detail_img} />
                        <div className={style.deatilwrap}>
                            <p className={style.detail_text}>{chat[1].userInfo?.displayName}</p>
                            <p className={style.detail_text2}>{chat[1].lastMessage?.text}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Chatdetails