
import styles from './styles.module.css'
import { BiTrash } from 'react-icons/bi'
import { BsCheck } from 'react-icons/bs'
import { useState } from 'react';

interface Tasks {
    id: string;
    content: string;
}

export function Task({ id, content }: Tasks) {
    const [taskConcluded, setTaskConcluded] = useState(false)

    return (
        <div className={styles.taskContainer}>
            <label htmlFor={id} >
                <input type="checkbox" onClick={() => setTaskConcluded(!taskConcluded)} className={styles.checkBox} name="" id={id} />
                <BsCheck />
            </label>
            <p className={taskConcluded ? styles.taskConcluded : 'null'}>{content}</p>
            <BiTrash />
        </div>
    )
}