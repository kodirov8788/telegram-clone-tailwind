import { useState } from "react"
import { FiSearch, FiBookmark, FiSettings } from "react-icons/fi"
import { GoThreeBars } from "react-icons/go"
import { VscSignOut, VscSignIn } from "react-icons/vsc"
import { BiArchiveIn } from "react-icons/bi"
import { FaRegUser } from "react-icons/fa"
import { RiMoonClearFill } from "react-icons/ri"
import { AiOutlineQuestionCircle, AiOutlinePlusCircle } from "react-icons/ai"
import { TbBug, TbLetterK, TbLetterW } from "react-icons/tb"
import Chatdetails from "./chatInfo"
import Sidebar from "./Sidebar"
import { Link } from "react-router-dom"


const Chat = () => {

    const [click, setClick] = useState(false)

    console.log(click)

    const style = {
        chat: "w-[35%] h-full bg-[#212121] flex flex-col border-r-[1px] border-solid border-[#2C2C2C]",
        searchBox: "w-full py-[10px] px-[15px] items-center flex",
        search: "w-full h-[40px] bg-[#2C2C2C] items-center flex rounded-[20px] px-[10px] overflow-hidden",
        nav: "w-full shadow-md bg-[#212121]",
        menuBtn: "text-[19px] text-[rgb(170,170,170)]",
        searchIcon: "text-[18px] text-[rgb(170,170,170)]",
        input: "bg-transparent text-[14px] flex-[1] h-full px-[10px] outline-none text-[rgb(170,170,170)]",
        barsBox: "w-[39px] h-[35px] hover:bg-[#2C2C2C] rounded-[50%] grid place-items-center mr-[5px] cursor-[pointer] relative",
        menuBox: "w-[250px] bg-[#2e2e2ecc] backdrop-blur-[5px] duration-[.3s] ease-out origin-top-left absolute top-[45px] left-0 p-[5px] rounded-[10px] shadow-md",
        menuCollection: "list-none w-full h-full flex flex-col",
        menuLi: "w-full flex py-[5px] list-none hover:bg-[#202020] cursor-pointer rounded-[4px] text-[13px] font-medium text-white",
        version: "w-full py-[7px] flex justify-center text-[11px] font-light text-[rgb(170,170,170)]",
        menuIcon: "text-[18px] text-[#aaaaaa] mx-[10px]"
    }
    return (
        <div className={style.chat}>
            <div className={style.nav}>
                <div className={style.searchBox}>
                    <div onClick={() => setClick(!click)} className={style.barsBox}>
                        <GoThreeBars className={style.menuBtn} />
                        <div style={{ transform: `${click ? "scale(1)" : "scale(0)"}` }} className={style.menuBox}>
                            <ul className={style.menuCollection}>
                                <li className={style.menuLi}><FiBookmark className={style.menuIcon} />Saved Messages</li>
                                <li className={style.menuLi}><BiArchiveIn className={style.menuIcon} />Archived Chats</li>
                                <li className={style.menuLi}><FaRegUser className={style.menuIcon} />Contacts</li>
                                <li className={style.menuLi}><FiSettings className={style.menuIcon} />Settings</li>
                                <li className={style.menuLi}><RiMoonClearFill className={style.menuIcon} />Night Mode</li>
                                <Link to="/register" className={style.menuLi}><VscSignIn className={style.menuIcon} />Sign Up</Link>
                                <li className={style.menuLi}><AiOutlineQuestionCircle className={style.menuIcon} />Telegram Features</li>
                                <li className={style.menuLi}><TbBug className={style.menuIcon} />Report Bug</li>
                                <li className={style.menuLi}><TbLetterK className={style.menuIcon} />Switch to K Version</li>
                                <li className={style.menuLi}><TbLetterW className={style.menuIcon} />Switch to Old Version</li>
                                <li className={style.menuLi}><AiOutlinePlusCircle className={style.menuIcon} />Install App</li>
                                <li className={style.menuLi}><VscSignOut className={style.menuIcon} />Sign Out</li>
                                <li className={style.version}>Telgramm WebZ 1.51.1</li>
                            </ul>
                        </div>
                    </div>
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