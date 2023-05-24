import { Task } from '../Task'
import styles from './tasks.module.css'


export const Tasks = () => {

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>2</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluidas</p>
          <span>2 de 10</span>
        </div>
      </header>

      <div className={styles.list}>
        <Task />
        <Task />
        <Task />
      </div>
    </section>
  )
}