const Sidebar = () => {
    const style = {
        sidebar: "w-[100%]",
        navtext: "text-[13px] font-medium text-[rgb(170,170,170)]",
        ul: "flex overflow-x-auto ml-[10px] scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-medium",
        li: "px-[15px] py-[8px] hover:bg-[#2C2C2C] cursor-[pointer] rounded-tl-[5px] rounded-tr-[5px]"
    }
    return (
        <div className={style.sidebar}>
            <ul className={style.ul}>
                <li className={style.li}><p className={style.navtext}>All</p></li>
                <li className={style.li}><p className={style.navtext}>Channel</p></li>
                <li className={style.li}><p className={style.navtext}>Group</p></li>
                <li className={style.li}><p className={style.navtext}>Bots</p></li>
                <li className={style.li}><p className={style.navtext}>Private</p></li>
            </ul>
        </div>
    )
}

export default Sidebar
