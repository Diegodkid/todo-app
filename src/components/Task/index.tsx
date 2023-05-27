import { ITask } from '../../App'
import styles from './styles.module.css'
import { TbTrash } from 'react-icons/tb'
import { BsFillCheckCircleFill } from 'react-icons/bs'

interface Props {
  task: ITask
  onDelete: (idTask: string) => void
  onToggleCompleted: (idTask: string) => void
}

export const Task = ({ task, onDelete, onToggleCompleted }: Props) => {
  function deleteTask () {
    onDelete(task.id)
  }

  function handleToggleTask () {
    onToggleCompleted(task.id)
  }

  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={handleToggleTask}>
        { task.isCompleted ? <BsFillCheckCircleFill /> : <div/> }
      </button>
      <p className={task.isCompleted ? styles.isCompleted : ''}>
        {task.title}
      </p>
      <button className={styles.deletButton} onClick={deleteTask}>
        <TbTrash size={24}/>
      </button>
    </div>
  )
}