import styles from "./navbar.module.css";
import SearchIcon from '@mui/icons-material/Search';
import CastOutlinedIcon from '@mui/icons-material/CastOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <SearchIcon style={{ position: 'absolute',fontSize: 24, color: 'white',marginLeft:16, alignSelf: 'center'}} />
                <input type="text" placeholder="Pesquise músicas, álbuns, artistas, podcasts" className={styles.input}/>
            </div>
            <div className={styles.options}>
                <CastOutlinedIcon style={{fontSize: 22, marginRight:12, color: 'white',}} />
                <AccountCircleOutlinedIcon style={{fontSize: 30, marginLeft:12, color: 'white'}} />
            </div>
        </div>
    )
}

export default Navbar;