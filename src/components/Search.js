import { FiSearch } from "react-icons/fi"
import { firestore } from "../firebase"
import { collection, query, where, getDocs, setDoc, doc, updateDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { useContext, useState } from 'react';
import { AuthContext } from "../context/AuthContext"

function Search() {
    const { currentUser } = useContext(AuthContext)
    const [username, setUsername] = useState("")
    const [user, setUser] = useState(null)
    const [error, setError] = useState(false)
    // console.log(" user>>", user);
    const style = {
        search: "w-full h-[40px] bg-[#2C2C2C] items-center flex rounded-[20px] px-[10px] overflow-hidden",
        searchIcon: "text-[18px] text-[rgb(170,170,170)]",
        input: "bg-transparent text-[14px] flex-[1] h-full px-[10px] outline-none text-[rgb(170,170,170)]",
        searchBox: "w-[300px] h-[100px] bg-red-500 absolute top-[50px] left-[220px]"


    }


    const HundleSearch = async () => {
        const q = query(collection(firestore, "users"),
            where("displayName", "==", username))
        // console.log("search ishladi", q)

        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data())
            });
        } catch (error) {
            setError(true)
        }


    }
    const HundleKey = (e) => {
        e.code === "Enter" && HundleSearch()
        // console.log("ishladi", e.code);
    }
    const HundleSelect = async () => {
        const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid
        try {
            const res = await getDoc(doc(firestore, "chats", combinedId))
            if (!res.exists()) {
                await setDoc(doc(firestore, "chats", combinedId), { messages: [] })
                await updateDoc(doc(firestore, "userChats", currentUser.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL
                    },
                    [combinedId + ".date"]: serverTimestamp()
                });
                await updateDoc(doc(firestore, "userChats", user.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL
                    },
                    [combinedId + ".date"]: serverTimestamp()
                })
            }
        } catch (error) {
            setError(true)
        }
        setUser(null)
        setUsername("")
    }
    return (
        <div className={style.search}>
            <FiSearch className={style.searchIcon} />
            <input className={style.input} value={username} type="text" placeholder="Search" onKeyDown={HundleKey} onChange={(e) => setUsername(e.target.value)} />

            {user && <div className={style.searchBox} onClick={HundleSelect}>

                <img src={user.photoURL} alt="" className='w-[50px] aspect-square object-cover rounded-full' />
                <h2>{user.displayName}</h2>
                {error && <h1>Nimadir hato</h1>}

            </div>}

        </div>


    )
}

export default Search