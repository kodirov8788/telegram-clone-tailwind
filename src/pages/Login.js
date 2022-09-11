import React from 'react'

function Login() {
    const style = {
        register: "bg-grey-lighter min-h-screen flex flex-col",
        register_child: "container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2",
        register_container: "bg-white px-6 py-8 rounded shadow-md text-black w-full",
        signuph1: "mb-8 text-3xl text-center",
        input: "block border border-grey-light w-full p-3 rounded mb-4",
        inputwrap: "h-[50px]  relative rounded-md  w-full bg-blue-400",
        inputfile: "w-full h-full opacity-0 cursor-pointer bg-none",
        inputh1: "absolute top-3 text-xl left-[20px] text-white z-10",
        btn: "w-full text-center py-3 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1 border hover:bg-red-300 border-black",
        footer: "text-center text-sm text-grey-dark mt-4",
        footer_link: "no-underline border-b border-grey-dark text-grey-dark ml-3",
        footer_login: "text-grey-dark mt-6"

    }

    return (
        <div>
            <div className={style.register}>
                <div className={style.register_child}>
                    <div className={style.register_container}>
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

                        <div className={style.footer}>
                            By signing up, you agree to the
                            <a className={style.footer_link} href="#">
                                Terms of Service
                            </a> and
                            <a className={style.footer_link} href="#">
                                Privacy Policy
                            </a>
                        </div>
                    </div>

                    <div className={style.footer_login}>
                        Already have an account?
                        <a className={style.footer_link} href="/register">
                            Register
                        </a>.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login