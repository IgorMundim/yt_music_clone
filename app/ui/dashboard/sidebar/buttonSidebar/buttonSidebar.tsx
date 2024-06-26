import styles from "./buttonSidebar.module.css"
import AddIcon from '@mui/icons-material/Add';


const ButtonSidebar = () => {
    return (
        <div className={styles.container}>
            <AddIcon  style={{ fontSize: 28, color: 'white', alignSelf: 'center'}} />
            <div className={styles.textButton}>Nova playlist</div>
        </div>
    )
}
export default ButtonSidebar;