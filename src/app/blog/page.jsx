import { getPosts } from "@/lib/data"
import styles from "./blog.module.css"
import PostCard from "@/components/postCard/postCard"
//fetch data with api
// const getData = async () =>{
//     //后面这个next的参数让它一小时才刷新一次 不用每次都重新加载页面
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts",{next:{revalidate:3600}})
//     if(!res.ok){
//         throw new Error("Something Wrong")
//     }
//     return res.json()
// }


const BlogPage = async () => {
    //fetch data with api
    //const posts = await getData()

    const posts = await getPosts();

    return(
        <div className={styles.container}>
            {posts.map((post) => (
                <div className={styles.post} key={post.id}>
                    <PostCard post={post}/>
                </div>
            ))}
            
        </div>
    );
};

export default BlogPage