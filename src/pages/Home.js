import React from 'react'
import Appear from '../components/Appear'
import Main from "../components/chat"

function Home() {
    const style = {
        home: "flex w-full h-[100vh] bgimage bg-cover"
    }
    return (
        <div className={style.home}>
            <Main />
            <Appear />
        </div>
    )
}

export default Home