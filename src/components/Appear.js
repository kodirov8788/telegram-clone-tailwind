import { useContext } from "react"
import { ChatContext } from "../context/ChatContext"
import Messages from "./Messages"
import Input from "./Input"

const Appear = () => {
    const { data } = useContext(ChatContext)
    const style = {
        appear: "w-9/12 hidden sm:flex h-full flex-col justify-between overflow-auto",
        chatTop: "w-full h-[10%] bg-[#212121] flex items-center justify-betweeen px-[20px]",
        sides: "flex h-full items-center",
        innerSide: "flex flex-col justify-between pl-[10px]",
        chatImgTop: "rounded-[50%] w-[42px] h-[42px] object-cover",
        nameOf: "text-white text-[16px] font-medium",
        typeOf: "text-[rgb(170,170,170)] text-[12px] font-normal",

    }
    // console.log("data", data);

    return (
        <div className={style.appear}>
            <div className={style.chatTop}>
                <div className={style.sides}>
                    <img className={style.chatImgTop} src={data?.user.photoURL} alt="" />
                    <div className={style.innerSide}>
                        <p className={style.nameOf}>{data?.user.displayName}</p>
                    </div>
                </div>
                <div className={style.sides}>
                </div>
            </div>
            <Messages />

            <Input />
        </div>
    )
}

export default Appear