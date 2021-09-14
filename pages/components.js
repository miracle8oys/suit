import styles from '../styles/Home.module.css'
const Components = ({pChoice, pChoices}) => {
    return ( 
        <div className={styles.player}>
            <img className={(pChoices === "rock") ? styles.choice : styles.image} onClick={pChoice} src="batu2.png" alt="rock" value="rock" />
            <img className={(pChoices === "papper") ? styles.choice : styles.image} onClick={pChoice} src="kertas2.png" alt="papper" value="papper" />
            <img className={(pChoices === "scissors") ? styles.choice : styles.image} onClick={pChoice} src="gunting2.png" alt="scissors" value="scissors" />
        </div>
     );
}
 
export default Components;