
import styles from './styles.module.css'
import rocket from '../../assets/rocket.svg'

export function Header(){
    return(
        <header className={styles.header}>
            <img src={rocket} alt="" />
            <h1><span>to</span>do</h1>
        </header>
    )
}