import { TbClipboardText } from 'react-icons/tb'
import { ITask } from '../../App'
import { Task } from '../Task'
import styles from './tasks.module.css'

interface Props {
  tasks: ITask[]
  onDelete: (idTask: string) => void
  onToggleCompleted: (idTask: string) => void
}

export const Tasks = ({ tasks, onDelete, onToggleCompleted }: Props) => {
  const taskQuantity = tasks.length
  const isCompleted = tasks.filter(task => task.isCompleted).length

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{taskQuantity}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluidas</p>
          <span>{isCompleted} de {taskQuantity}</span>
        </div>
      </header>

      <div className={styles.list}>
        { tasks.map(task => {
          return <Task 
                    task={task} 
                    onDelete={onDelete} 
                    onToggleCompleted={onToggleCompleted}
                  />
        })}

        {tasks.length === 0 && (
          <section className={styles.empty}>
            <TbClipboardText size={50}/>
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </div>
    </section>
  )
}