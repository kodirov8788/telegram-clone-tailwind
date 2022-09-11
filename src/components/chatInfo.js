import { chatInfo } from "../static/telegramStatic"

const Chatdetails = () => {
    const style = {
        detailBox: "w-full h-full bg-transparent p-[5px]"
    }
    return (
        <div className={style.detailBox}>
            {
                chatInfo.map((chat) => (
                    <div key={chat.id} className="w-full h-[70px] flex items-center rounded-[10px] px-[5px] hover:bg-[#2C2C2C] cursor-[pointer]">
                        <img src={chat.chatImg} alt="" className="rounded-[50%] w-[55px] h-[55px] object-cover" />
                        <div className="flex-[1] h-full flex-col flex justify-evenly py-[10px] ml-[10px]">
                            <p className="text-white text-[14px] font-medium">{chat.chatName}</p>
                            <p className="text-[12px] text-[rgb(170,170,170)]">{chat.recieved}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Chatdetails