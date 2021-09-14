import styles from '../styles/Home.module.css'
const Com = ({comChoices}) => {
    return ( 
        <div className={styles.player}>
            <img src="batu2.png" alt="rock" className={(comChoices === "rock") ? styles.choice : styles.image} />
            <img src="kertas2.png" alt="rock" className={(comChoices === "papper") ? styles.choice : styles.image} />
            <img src="gunting2.png" alt="rock" className={(comChoices === "scissors") ? styles.choice : styles.image} />
        </div>
     );
}
 
export default Com;