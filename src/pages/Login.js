import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"
function Login() {
    const style = {
        register: "bg-grey-lighter min-h-screen flex flex-col loginbg bg-cover",
        register_child: "container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2",
        register_container: "bg-white px-6 py-8 rounded shadow-md text-black w-full",
        signuph1: "mb-8 text-3xl text-center",
        input: "block border border-grey-light w-full p-3 rounded mb-4",
        inputwrap: "h-[50px]  relative rounded-md  w-full bg-blue-400",
        inputfile: "w-full h-full opacity-0 cursor-pointer bg-none",
        inputh1: "absolute top-3 text-xl left-[20px] text-white z-10",
        btn: "w-full text-center py-3 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1 border hover:bg-red-300 border-black",
        footer_login: "text-grey-dark mt-6 text-white"

    }

    const navigate = useNavigate()
    const [error, seterror] = useState(false)

    const Login = async (e) => {
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/")
        } catch (error) {
            seterror(true)
        }

    }
    return (
        <div>
            <div className={style.register}>
                <div className={style.register_child}>
                    <form onSubmit={Login} className={style.register_container}>
                        <h1 className={style.signuph1}>Sign in</h1>
                        <input
                            type="text"
                            className={style.input}
                            name="email"
                            placeholder="Email" />

                        <input
                            type="password"
                            className={style.input}
                            name="password"
                            placeholder="Password" />
                        <button
                            type="submit"
                            className={style.btn}
                        >Login</button>
                        <span>{error && <h1>Nimadir hato?</h1>}</span>
                    </form>

                    <div className={style.footer_login}>
                        Already have an account?
                        <Link className={style.footer_link} to="/register">
                            Register
                        </Link>.
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login