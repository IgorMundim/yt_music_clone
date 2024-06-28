'use client'
import { useRef, useState, useEffect } from "react";
import Button from "./button/button";
import styles from "./carousel.module.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
interface Props {
    title: string;
}
const Carousel = ({title="Videoclipes recomendados"}: Props) => {
    const [data, setData] = useState([]);
    const carousel = useRef(document.createElement("div"))
  
    useEffect(() => {
      fetch('http://localhost:3000/static/playlist.json')
        .then((response) => response.json())
        .then(setData);
    }, []);
  
    const handleLeftClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault(); 
    };
  
    const handleRightClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
  
      carousel.current.scrollLeft += carousel.current.offsetWidth;

    };
  
    if (!data || !data.length) return null;

    return (
        <>
        <div className={styles.wrapper}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.menu}>
                <Button />
                <div className={styles.nextPrevious} onClick={handleLeftClick}>
                <ArrowBackIosNewIcon  style={{ fontSize: 18, color: 'white',}} />
                </div>
                <div className={styles.nextPrevious} onClick={handleRightClick}>
                <ArrowForwardIosIcon  style={{ fontSize: 18, color: 'white',}} />
                </div>
            </div>
        </div>   

        <div className={styles.container}>
            <div className={styles.carousel} ref={carousel}>
                {data.map((item) => {
                const { id, name, band, views } = item;
                return (
                    <div className={styles.slide} key={id}>
                        {id}
                    </div>
                );
                })}
            </div>
        </div>
    </>
    )
}
export default Carousel;