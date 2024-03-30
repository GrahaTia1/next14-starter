"use client"

import Link from 'next/link'
import styles from './navLink.module.css'
import { usePathname } from 'next/navigation'

const NavLink = ({item}) =>{
    // pathName就是当前页面的路径
    const pathName = usePathname();

    return(
        // 首先我们会正常去显示${styles.container} 的内容
        //然后在另一个插值中，我们判断路径是否等于当前路径 &&表示如果成功 我们就渲染styles.active的内容
        <Link href={item.path} className={`${styles.container} 
            ${pathName === item.path && styles.active}`}>
            {item.title}
        </Link>
    )
}

export default NavLink