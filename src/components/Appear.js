import vk from "../images/vk.jpg"
import { chatInfo } from "../static/telegramStatic"

const Appear = () => {

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

    return (
        <div className={style.appear}>
            <div className={style.chatTop}>
                <div className={style.sides}>
                    <img className={style.chatImgTop} src={vk} alt="" />
                    <div className={style.innerSide}>
                        <p className={style.nameOf}>VK Music Bot</p>
                        <p className={style.typeOf}>bot</p>
                    </div>
                </div>
                <div className={style.sides}>
                </div>
            </div>
            <div className={style.mainChat}>

                {chatInfo.map((chat) => (<>
                    <div className={style.leftchat}>
                        <h1 className={style.leftchat_h1}>{chat.send}</h1>
                    </div>
                    <div className={style.rightchat}>
                        <h1 className={style.rightchat_h1}>{chat.send}</h1>

                    </div>

                </>))}

            </div>

            <div className={style.chat_footer}>
            </div>
        </div>
    )
}

export default Appear