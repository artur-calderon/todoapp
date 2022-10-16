
import styles from './styles.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { BsClipboardX } from 'react-icons/bs'
import { Task } from '../Tasks/Task'
import { FormEvent, useState } from 'react'

export function Main() {
    const [tasks, setTasks] = useState<string[]>([])
    const [newTask, setNewTask] = useState('')
    const[taskConcludedCount, setTaskConcludedCount]= useState(0)



    function handleNewTask(event: FormEvent) {
        event.preventDefault()
        setTasks([...tasks, newTask])
        setNewTask('')
    }

    // function handleNewTaskText(event:ChangeEvent<HTMLInputElement>){
    //    setNewTask(event.target.value)
    // }

    function handleDeleteTask(taskToDelete:string, concludedOnDelete:boolean) {
        const taskWithDeletedOne = tasks.filter(task=>{
            return task != taskToDelete
        });
        if(concludedOnDelete){
            setTaskConcludedCount(prev => prev-=1)
        }
        setTasks(taskWithDeletedOne)
    }

    function tasksConcludedCount(concluded:boolean){
        if(concluded){
            setTaskConcludedCount(prev => prev+=1)
        }else if(taskConcludedCount <= 0){
            return
        }
        else{
            setTaskConcludedCount(prev => prev-=1)
        }
    }

    return (
        <main className={styles.main}>
            <form className={styles.boxAdd} onSubmit={handleNewTask}>
                <input type="text" onChange={(e) => setNewTask(e.target.value)} value={newTask} placeholder='Adicione uma nova tarefa' />
                <button type='submit'>Criar <AiOutlinePlusCircle size={16} /></button>
            </form>
            <div className={styles.taskBoxHeader}>
                <span className={styles.created}>Tarefas criadas <span>{tasks.length}</span></span>
                <span className={styles.completed}>Concluídas <span>{taskConcludedCount} de {tasks.length}</span></span>
            </div>
            {
                tasks.length == 0 ? (
                    <div className={styles.taskBoxEmpty}>
                        <BsClipboardX />
                        <p><span>Você ainda não tem tarefas cadastradas<br /></span>
                            Crie tarefas e organize seus itens a fazer</p>
                    </div>
                ) : (
                    <div className={styles.taskBox}>
                        {
                            tasks.map(task => {
                                return <Task
                                    key={task}
                                    id={task}
                                    content={task}
                                    onDeleteTask={handleDeleteTask}
                                    tasksConcludedCount={tasksConcludedCount}
                                />
                            })
                        }
                    </div>
                )
            }


        </main>
    )
}