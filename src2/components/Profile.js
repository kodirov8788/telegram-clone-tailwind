import React, { useContext } from 'react'
import { AuthContext } from "../context/AuthContext"

function Profile() {
    const { currentUser } = useContext(AuthContext)
    console.log(currentUser);
    const style = {
        profile: "text-white w-full h-[100px]  p-2 flex justify-around items-center",
        img: "rounded-full w-[50px] h-[50px]",
        h2: " text-[30px] "
    }
    return (
        <div className={style.profile}>
            <img className={style.img} src={currentUser.photoURL} alt="" />
            <h2 className={style.h2}>{currentUser.displayName}</h2>
        </div>
    )
}

export default Profile