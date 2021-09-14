import styles from '../styles/Home.module.css'
const Result = ({result}) => {
    return ( 
        <div className={styles.result}>
            <h1 className={(result != "VS") ? styles.transform : ""}>{result}</h1>
        </div>
     );
}
 
export default Result;