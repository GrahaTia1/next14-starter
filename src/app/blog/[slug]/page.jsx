import Image from "next/image"
import styles from "./singlePost.module.css"
import PostUser from "@/components/postUser/postUser"
import { Suspense } from "react"
import { getPost } from "@/lib/data"

//fetch data with api
// const getData = async (slug) =>{
//     //后面这个next的参数让它一小时才刷新一次 不用每次都重新加载页面
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
//     if(!res.ok){
//         throw new Error("Something Wrong")
//     }
//     return res.json()
// }

export const generateMetadata = async ({params}) =>{
    const { slug } = params;
    const post = await getPost(slug);

    return{
        title:post.title,
        description:post.desc,
    }

}

const SinglePostPage = async ({params}) => {

    const {slug} = params;
    //fetch data with api
    //const posts = await getData(slug);

    const post = await getPost(slug);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src={post.img} alt="" fill className={styles.img}/>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    
                    
                    {post && (
                        <Suspense fallback={<div>Loading...</div>}>
                            <PostUser userId={post.userId} />
                        </Suspense>  
                    )}
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>{post.createAt}</span>
                    </div>
                </div>
                <div className={styles.content}>
                    {post.desc}
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage