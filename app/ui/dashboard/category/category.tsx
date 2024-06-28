import styles from "./category.module.css";
interface Props {
    text: string
}
const Category = ({text}: Props) => {
    return(
        <div className={styles.container}>
         <div className={styles.text}>{text}</div> 
        </div>
    )
}
export default Category