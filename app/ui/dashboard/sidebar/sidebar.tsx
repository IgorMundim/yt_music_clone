'use client'
import Image from "next/image";
import styles from "./sidebar.module.css"
import {
    DehazeSharp, 
    Home as HomeIcon, 
    ExploreOutlined as ExploreIcon, 
    LibraryMusicOutlined as LibraryMusicIcon, 
    PlayCircleOutlineRounded as PlayIcon} from '@mui/icons-material';

import ButtonSidebar from "./buttonSidebar/buttonSidebar";
import MenuLink from "./menuLink/menuLink";
import { useContext } from "react";
import { PageContext } from "@/app/context/pageContext";
import MenuLinkSmall from "./menuLinkSmall/menuLinkSmall";


  
const menuItems = [
    {
        id: 1,
        title: "Início",
        path: "/dashboard",
        icon: <HomeIcon  style={{ fontSize: 24, color: 'white', alignSelf: 'center'}} />
    },
    {
        id: 2,
        title: "Explorar",
        path: "",
        icon: <ExploreIcon  style={{ fontSize: 24, color: 'white', alignSelf: 'center'}} />
    },
    {
        id: 3,
        title: "Biblioteca",
        path: "",
        icon: <LibraryMusicIcon  style={{ fontSize: 24, color: 'white', alignSelf: 'center'}} />
    },
    {
        id: 4,
        title: "Upgrade",
        path: "",
        icon: <PlayIcon style={{ fontSize: 24, color: 'white', alignSelf: 'center'}} />
    },
]

const Sidebar = () => {
    const { updatePage, page } = useContext(PageContext)!;


    return (
        <>
            <div className={styles.menu} >
                <div 
                    className={styles.menuOpen}
                    onClick={() => updatePage({openMenu: !page.openMenu})} >
                <DehazeSharp  
                    style={{ fontSize: 40, color: 'white', padding:8, marginRight:12, alignSelf: 'center'}}    
                />
                </div>
                <Image
                    src="/on_platform_logo_dark.svg"
                    width={80}
                    height={24}
                    alt="Logo"
                    style={{alignSelf: 'center', cursor: 'pointer'}}
            />        
            </div>

            <ul className={styles.list}>
                {page.openMenu ? menuItems.map((item: {title: string; path: string; icon: JSX.Element;}, key) => (
                     <MenuLink item={item} key={key}/>
                )) : menuItems.map((item: {title: string; path: string; icon: JSX.Element;}, key) => (
                    <MenuLinkSmall item={item} key={key}/>
               ))}
            </ul>

            {page.openMenu && <>
                <div className={styles.divider}></div>
                <div className={styles.button}>
                <ButtonSidebar />
                </div> 
            </>}
            
        </>
    )
}
export default Sidebar;