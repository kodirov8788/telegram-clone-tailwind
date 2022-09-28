import { GoThreeBars } from "react-icons/go"
import Chatdetails from "./chatInfo"
import Sidebar from "./Sidebar"
import { signOut } from "firebase/auth"
import { auth } from "../firebase"
import { useState } from "react"
// import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"
import Search from "./Search"


const Chat = () => {
    const [click, setclick] = useState(false)
    // console.log(click)
    const { currentUser } = useContext(AuthContext)
    // console.log("nav >>>", currentUser);
    const style = {
        chat: "w-full sm:w-3/12 h-full bg-[#212121] flex flex-col border-r-[1px] border-solid border-[#2C2C2C]",
        searchBox: "w-full py-[10px] px-[20px] items-center flex",
        nav: "w-full shadow-md bg-[#212121]",
        menuBtnWrap: "relative ",
        menuBtn: "text-[26px] text-[rgb(170,170,170)] mr-[20px] hover:bg-red-400 cursor-pointer rounded-full",
        input: "bg-transparent text-[14px] flex-[1] h-full px-[10px] outline-none text-[rgb(170,170,170)]",
        clickBox: `${click ? "scale-[1]" : "scale-[0]"} origin-top-left duration-[.5s] bg-blue-500 w-[200px] h-[200px] absolute flex flex-col items-center justify-around`,
        signout: "  px-5  py-2 bg-red-300 rounded-lg hover:bg-red-500 hover:text-white duration-[.3s]",
        clickBox_h1: "",
        clickBox_img: "w-2/5 rounded-full aspect-square"
    }


    return (
        <div className={style.chat}>
            <div className={style.nav}>
                <div className={style.searchBox}>
                    <div className={style.menuBtnWrap}>
                        <GoThreeBars className={style.menuBtn} onClick={() => setclick(!click ? true : false)} />
                        <div className={style.clickBox}>
                            <img src={currentUser.photoURL} alt="" className={style.clickBox_img} />
                            <h2 className={style.clickBox_h1}>{currentUser.displayName}</h2>
                            <button onClick={() => signOut(auth)} className={style.signout}>Sign Out</button>
                        </div>
                    </div>
                    <Search />
                </div>
                <Sidebar />
            </div>
            <Chatdetails />
        </div >
    )
}

export default Chat