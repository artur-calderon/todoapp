
import styles from './styles.module.css'
import { BiTrash } from 'react-icons/bi'
import { BsCheck, BsInfoCircleFill } from 'react-icons/bs'
import { useState } from 'react';

interface Tasks {
    id: string;
    content: string;
    onDeleteTask: (task:string, concludedOnDelete:boolean)=> void;
    tasksConcludedCount:(concluded:boolean)=>void;
}

export function Task({ id, content, onDeleteTask,tasksConcludedCount }: Tasks) {
    const [taskConcluded, setTaskConcluded] = useState(false)


    function handledeleteTask(id:string){
        onDeleteTask(id, taskConcluded)
    }

    function handleTaskConcluded(){
        tasksConcludedCount(!taskConcluded)
        setTaskConcluded(!taskConcluded)
    }

    return (
        <div className={styles.taskContainer}>
            <label htmlFor={id} >
                <input type="checkbox" onClick={handleTaskConcluded} className={styles.checkBox} name="" id={id} />
                <BsCheck />
            </label>
            <p className={taskConcluded ? styles.taskConcluded : ''}>{content}</p>
            <BiTrash onClick={()=>handledeleteTask(id)}/>
        </div>
    )
}