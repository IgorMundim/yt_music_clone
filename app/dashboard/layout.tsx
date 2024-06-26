'use client'
import Navbar from "../ui/dashboard/navbar/navbar"
import Sidebar from "../ui/dashboard/sidebar/sidebar"
import style from "../ui/dashboard/dashboard.module.css"
import { useContext } from "react"
import { PageContext } from "../context/pageContext"


const Layout = ({ children}: {
    children: React.ReactNode
}) => {
    const {  page } = useContext(PageContext)!;
    return(
            <div className={style.container}>
                <div className={`${ page.openMenu ? style.sidebarLarge: style.sidebarMedium}`}>
                    <Sidebar/>
                </div>
                <div className={`${ page.openMenu ? style.navbarMedium: style.navbarLarge}`}>
                    <Navbar/>
                    {children}
                </div>
            </div>
        
    )
}

export default Layout