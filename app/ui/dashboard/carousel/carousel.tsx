import Button from "./button/button";
import styles from "./carousel.module.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
interface Props {
    title: string
}
const Carousel = ({title="Videoclipes recomendados"}) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.menu}>
                <Button />
                <div className={styles.nextPrevious}>
                <ArrowBackIosNewIcon  style={{ fontSize: 18, color: 'white',}} />
                </div>
                <div className={styles.nextPrevious}>
                <ArrowForwardIosIcon  style={{ fontSize: 18, color: 'white',}} />
                </div>
            </div>
        </div>
    )
}
export default Carousel;