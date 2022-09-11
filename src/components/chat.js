import { FiSearch } from "react-icons/fi"
import { GoThreeBars } from "react-icons/go"
import Chatdetails from "./chatInfo"
import Sidebar from "./sidebar"


const Chat = () => {

    const style = {
        chat: "w-full sm:w-2/5 h-full bg-[#212121] flex flex-col border-r-[1px] border-solid border-[#2C2C2C]",
        searchBox: "w-full py-[10px] px-[20px] items-center flex",
        search: "w-full h-[40px] bg-[#2C2C2C] items-center flex rounded-[20px] px-[10px] overflow-hidden",
        nav: "w-full shadow-md bg-[#212121]",
        menuBtn: "text-[20px] text-[rgb(170,170,170)] mr-[20px]",
        searchIcon: "text-[18px] text-[rgb(170,170,170)]",
        input: "bg-transparent text-[14px] flex-[1] h-full px-[10px] outline-none text-[rgb(170,170,170)]"
    }
    return (
        <div className={style.chat}>
            <div className={style.nav}>
                <div className={style.searchBox}>
                    <GoThreeBars className={style.menuBtn} />
                    <div className={style.search}>
                        <FiSearch className={style.searchIcon} />
                        <input className={style.input} type="text" placeholder="Search" />
                    </div>
                </div>
                <Sidebar />
            </div>
            <Chatdetails />
        </div>
    )
}

export default Chat