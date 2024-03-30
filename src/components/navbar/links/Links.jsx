"use client";
import Link from "next/link"
import styles from './links.module.css';
import NavLink from "./navLink/navLink";
import { useState } from "react";
import Image from "next/image";
import { handleLogout } from "@/lib/action";

//先const一个数组对象 里面是标题和路径
    //在div中用links.map方法遍历所有link
    //对每个link生成一个Link链接
    const links = [
        {
            title:"Homepage",
            path:"/",
        },
        {
            title:"About",
            path:"/about",
        },
        {
            title:"Contact",
            path:"/contact",
        },
        {
            title:"Blog",
            path:"/blog",
        },
    ]

const Links = ({session}) => {

    const [open,setOpen] = useState(false);

    //temporary
    const isAdmin = true

    return (
        <div className={styles.container}>
            <div className={styles.links}>
            {links.map((link=>(
                <NavLink item={link} key={link.title}/>    
            )))}
            {/* 判断是否登录 登录了的话看是不是管理员 分别进行渲染 */}
            {session?.user ? (
                <>
                    {session.user ?.isAdmin && <NavLink item={{title:"Admin",path:"/admin"}} />}
                    <form action={handleLogout}>
                        <button className={styles.logout}>Logout</button>
                    </form>   
                </>
            ):(
                <NavLink item={{title:"Login",path:"/login"}} />
            )}
            </div>

            {/* 适配手机端的两个classname 一个是按钮 控制State open是否打开菜单
                另一个是手机端的链接s open的时候就渲染 样式不同 */}
           
             <Image src="/menu.png"
              alt=""
              className={styles.menuButton} 
              width={30} 
              height={30} 
              onClick={()=>setOpen((prev)=>!prev)} />
            {open &&(
                <div className={styles.mobileLinks}>
                    {links.map((link)=>(
                        <NavLink item={link} key={link.title} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Links