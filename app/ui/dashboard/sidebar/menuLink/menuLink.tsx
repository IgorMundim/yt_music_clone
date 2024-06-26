'use client'
import { usePathname } from "next/navigation";
import styles from "./menuLink.module.css"

interface Props {
    item: {
        title: string;
        path: string; 
        icon: JSX.Element;
    }
}
const MenuLink = ({item}: Props ) => {
    const pathname = usePathname()
    return (
        <li className={`${styles.container} ${pathname === item.path && styles.active}`}>
            {item.icon}
            <div className={styles.text}> {item.title}</div>
        </li>
    )
}

export default MenuLink