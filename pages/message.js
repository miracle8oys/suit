import styles from '../styles/Home.module.css'
const Message = ({msg}) => {
    return ( 
        <div className={(msg != "") ? styles.message : ""}>
            <p>{msg}</p>
        </div>
     );
}
 
export default Message;