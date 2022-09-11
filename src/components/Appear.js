import vk from "../images/vk.jpg"

const Appear = () => {

    const style = {
        appear: "w-3/5 hidden sm:flex h-full flex-col justify-between",
        chatTop: "w-full h-[55px] bg-[#212121] flex items-center justify-betweeen px-[20px]",
        sides: "flex h-full items-center",
        innerSide: "flex flex-col justify-between pl-[10px]",
        chatImgTop: "rounded-[50%] w-[42px] h-[42px] object-cover",
        nameOf: "text-white text-[16px] font-medium",
        typeOf: "text-[rgb(170,170,170)] text-[12px] font-normal"

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
            <div className=""></div>
        </div>
    )
}

export default Appear