
import styles from './styles.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { BsClipboardX } from 'react-icons/bs'
import { Task } from '../Tasks/Task'

export function Main() {
    return (
        <main className={styles.main}>
            <div className={styles.boxAdd}>
                <input type="text" placeholder='Adicione uma nova tarefa' />
                <button>Criar <AiOutlinePlusCircle size={16} /></button>
            </div>
            <div className={styles.taskBoxHeader}>
                <span className={styles.created}>Tarefas criadas <span>0</span></span>
                <span className={styles.completed}>Concluídas <span>0</span></span>
            </div>
            {/* <div className={styles.taskBoxEmpty}>
                <BsClipboardX/>
                <p><span>Você ainda não tem tarefas cadastradas<br/></span>
                Crie tarefas e organize seus itens a fazer</p>
            </div> */}
            <div className={styles.taskBox}>
                <Task id='estudar' content='Estudar React' />
                <Task id='prova' content='Prova' />
            </div>
        </main>
    )
}