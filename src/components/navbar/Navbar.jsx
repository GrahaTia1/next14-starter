
import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"
import { auth } from "@/lib/auth"

//这是第一个组件头部导航栏 导入Links组件渲染链接们 
const Navbar = async () => {

    const session = await auth();
    console.log(session)

    return (
        <div className={styles.container}> 
            <Link href="/" className={styles.logo}>Logo</Link>
            <div>
                <Links session={session}/>
            </div>
        </div>
    )
}

export default Navbar