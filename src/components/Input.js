import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore'
import React, { useContext } from 'react'
import { useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
import { firestore, storage } from '../firebase'
import { v4 as uuid } from "uuid"
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { MdAttachFile } from "react-icons/md"

function Input() {
    const style = {
        chat_footer: "w-full h-[100px] bg-blue-400 sticky bottom-0 flex items-center",
        send: "flex ",
        input: "flex-[1] h-4/5 text-[30px] indent-3 bg-transparent outline-none placeholder:text-white text-white",
        file: "w-fit px-[20px] hover:bg-gray-300 duration-300  relative rounded",
        fileInput: "absolute top-0 w-full h-full opacity-0 cursor-pointer",
        icon: "text-[50px] rotate-[45deg]",
        sendBtn: "border hover:bg-red-200 rounded text-[26px]  px-[30px] py-2 duration-300",
    }
    const [text, setText] = useState("")
    const [img, setImg] = useState(null)
    const { data } = useContext(ChatContext)
    const { currentUser } = useContext(AuthContext)
    const handleSend = async () => {
        if (img) {
            const storageRef = ref(storage, uuid());
            const uploadTask = uploadBytesResumable(storageRef, img);
            uploadTask.on('state_changed',
                (snapshot) => {

                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + Math.round(progress) + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateDoc(doc(firestore, "chats", data.chatId), {
                            messages: arrayUnion({
                                id: uuid(),
                                text,
                                senderId: currentUser.uid,
                                date: Timestamp.now(),
                                img: downloadURL
                            })
                        })
                    });
                }
            );
        } else {
            await updateDoc(doc(firestore, "chats", data.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    date: Timestamp.now(),
                })
            });
        }

        updateDoc(doc(firestore, "userChats", currentUser.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId + ".date"]: serverTimestamp(),
        });
        updateDoc(doc(firestore, "userChats", data.user.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId + ".date"]: serverTimestamp(),
        });

        setImg(null)
        setText("")
    }
    return (
        <div className={style.chat_footer}>
            <input type="text" className={style.input} placeholder='text' value={text} onChange={(e) => setText(e.target.value)} />
            <div className={style.send}>
                <div className={style.file}>
                    <MdAttachFile className={style.icon} />
                    <input type="file" className={style.fileInput} onChange={(e) => setImg(e.target.files[0])} />

                </div>
                <button className={style.sendBtn} onClick={handleSend}>Send</button>
            </div>
        </div>
    )
}

export default Input







