import { getUser } from "@/lib/data";
import styles from "./postUser.module.css"
import Image from "next/image";

// const getData = async (userId) =>{
//     //后面这个next的参数让它一小时才刷新一次 不用每次都重新加载页面
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}` , {cache:"no-store"})
//     if(!res.ok){
//         throw new Error("Something Wrong")
//     }
//     return res.json()
// }


const PostUser = async ({userId}) => {
    // FETCH DATA WITH AN API
    //const user = await getData(userId);

    // FETCH DATA WITHOUT AN API
    const user = await getUser(userId);

    return(
        <div className={styles.container}>
            <Image src="/edona.png" alt="" 
                      className={styles.avatar} width={50} height={50}/>
            <div className={styles.texts}>
                <span className={styles.title}>Author</span>
                <span className={styles.username}>{user.username}</span>
            </div>
            
        </div>
    )
}

export default PostUser