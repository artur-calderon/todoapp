
import styles from './styles.module.css'
import { BiTrash } from 'react-icons/bi'

export function Task() {
    return (
        <div className={styles.taskContainer}>
            <label htmlFor="check">
            </label>
                <input type="checkbox" className={styles.checkBox} name="" id="check" />
            <p>Estudar para prova de matemática</p>
            <BiTrash />
        </div>
    )
}