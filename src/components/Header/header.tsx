import styles from './header.module.css'
import Logo from '../../assets/Logo.svg'

import { AiOutlinePlusCircle } from 'react-icons/ai'

export function Header () {
  return (
    <header className={styles.header}>
      <img src={Logo} />

      <form className={styles.newTaskForm}>
        <input type="text" placeholder='Insira uma nova tarefa'/>
        <button>
          Criar
          <AiOutlinePlusCircle size={20}/>
        </button>
      </form>
    </header>
  )
}