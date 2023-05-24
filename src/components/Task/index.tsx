import styles from './styles.module.css'
import { TbTrash } from 'react-icons/tb'

export const Task = () => {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div/>
      </button>
      <p>tarefa</p>
      <button className={styles.deletButton}>
        <TbTrash size={24}/>
      </button>
    </div>
  )
}