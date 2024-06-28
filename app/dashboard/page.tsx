import Carousel from '../ui/dashboard/carousel/carousel';
import Category from '../ui/dashboard/category/category';
import styles from '../ui/dashboard/dashboard.module.css'

const data = [
    {text: "Para treinar"},
    {text: "Energia "},
    {text: "Podcasts"},
    {text: "Festa"},
    {text: "Relax"},
    {text: "Romance"},
    {text: "Para ouvir no tránsito"},
    {text: "Positividade"},
    {text: "Triste"},
    {text: "Foco"},
    {text: "Pora dormir"},
]
const Dashboard = () => {

  
    return (
        <div className={styles.wrapper}>
            <div className={styles.category}>
                {data.map((item:{text: string})=> (
                    <Category {...item}/>
                ))}
            </div>
            <div className={styles.carousel}>
                <Carousel  title='Videoclipes recomendados'/>
            </div>
        </div>
    )
}
export default Dashboard;