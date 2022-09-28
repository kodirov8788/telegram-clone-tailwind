import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { FiSearch, } from "react-icons/fi"
import { AuthContext } from "../context/AuthContext"
import { collection, query, where, getDocs, getDoc, setDoc, doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig"

function Search() {
    const style = {
        search: "w-full h-[40px] bg-[#2C2C2C] items-center flex rounded-[20px] px-[10px] relative",
        searchIcon: "text-[18px] text-[rgb(170,170,170)]",
        input: "bg-transparent text-[14px] flex-[1] h-full px-[10px] outline-none text-[rgb(170,170,170)]",
        searchBox2: "w-[300px] h-[100px] bg-blue-200 absolute top-[50px] z-10 flex items-center justify-around",
        userImg: "w-1/4",
        username: "text-[26px]"
    }

    const { currentUser } = useContext(AuthContext)
    const [user, setUser] = useState(null)
    console.log("user >>", user);
    const HundleSearch = async (e) => {
        const q = query(collection(db, "users"), where("displayName", "==", e.target.value));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setUser({ uid: doc.id, data: doc.data() });
        });
    }

    const HundleSelect = async () => {
        const combinedId = currentUser.uid > user?.uid ? currentUser.uid + user.uid : user?.uid + currentUser.uid
        console.log("combined >>", combinedId);
        console.log("user >>", user.uid);
        console.log("current >>", currentUser.uid);

        try {
            const response = await getDoc(doc(db, "chats", combinedId))
            if (!response.exists()) {
                await setDoc(doc(db, "chats", combinedId), { messages: [] })
                await updateDoc(doc(db, "userChats", currentUser.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: user.uid,
                        displayName: user.data?.displayName,
                        photoURL: user.data?.photoURL
                    },
                    [combinedId + ".date"]: serverTimestamp()
                });
                await updateDoc(doc(db, "userChats", user.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL
                    },
                    [combinedId + ".date"]: serverTimestamp()
                });
            }
            // setUser("")

        } catch (error) {
            console.log(error.message);
        }

    }
    return (
        <div className={style.search}>
            <FiSearch className={style.searchIcon} />
            <input className={style.input} onChange={HundleSearch} type="text" placeholder="Search" />
            {!user || user === undefined ? "" : <div className={style.searchBox2} onClick={HundleSelect}>
                <img src={user.data?.photoURL} alt="" className={style.userImg} />
                <h1 className={style.username}>{user.data?.displayName}</h1>
            </div>
            }
        </div>

    )
}

export default Search