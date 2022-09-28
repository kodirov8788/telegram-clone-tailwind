import { Link } from "react-router-dom"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, firestore } from "../firebase"
import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom"
function Register() {
    const navigate = useNavigate()
    const [error, seterror] = useState(false)
    const style = {
        register: "bg-grey-lighter min-h-screen flex flex-col loginbg bg-cover",
        register_child: "container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2",
        register_container: "bg-white px-6 py-8 rounded shadow-md text-black w-full",
        signuph1: "mb-8 text-3xl text-center",
        input: "block border border-grey-light w-full p-3 rounded mb-4",
        inputwrap: "h-[50px]  relative rounded-md  w-ful l bg-blue-400",
        inputfile: "h-full w-full cursor-pointer bg-none absolute z-[10] opacity-0",
        inputh1: "absolute top-3 text-xl left-[20px] text-white z-[0]",
        btn: "w-full text-center py-3 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1 border hover:bg-red-300 border-black",
        footer_login: "text-grey-dark mt-6 text-white"

    }
    const Register = async (e) => {
        e.preventDefault()
        const displayName = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        const file = e.target[3].files[0]
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            const storageRef = ref(storage, displayName);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed',
                (snapshot) => {

                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + Math.round(progress) + '% done');
                    // switch (snapshot.state) {
                    //     case 'paused':
                    //         console.log('Upload is paused');
                    //         break;
                    //     case 'running':
                    //         console.log('Upload is running');
                    //         break;
                    // }
                },
                (error) => {
                    seterror(true)
                },
                () => {

                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL,
                        })
                        await setDoc(doc(firestore, "users", res.user.uid), {
                            displayName,
                            email,
                            photoURL: downloadURL,
                            uid: res.user.uid
                        });
                        await setDoc(doc(firestore, "userChats", res.user.uid), {});
                        navigate("/")
                    });

                }
            );


        } catch (error) {
            seterror(true)
        }

    }

    return (
        <div className={style.register}>
            <div className={style.register_child}>
                <form onSubmit={Register} className={style.register_container}>
                    <h1 className={style.signuph1}>Sign up</h1>
                    <input
                        type="text"
                        className={style.input}
                        name="fullname"
                        placeholder="Full Name" />

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

                    <div className={style.inputwrap}>
                        <input type="file" className={style.inputfile} />
                        <h1 className={style.inputh1}>Rasm tanlang!</h1>
                    </div>


                    <button type="submit" className={style.btn}>Create Account</button>
                    {error && <h1>Error chiqdi</h1>}

                </form>

                <div className={style.footer_login}>
                    Already have an account?
                    <Link className="" to="/login">
                        Log in
                    </Link>.
                </div>
            </div>
        </div>
    )
}

export default Register