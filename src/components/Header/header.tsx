import styles from './header.module.css'
import Logo from '../../assets/Logo.svg'

import { AiOutlinePlusCircle } from 'react-icons/ai'
import { ChangeEvent, FormEvent, useState } from 'react'

interface Props {
  onAddTask: (taskTitle: string) => void
}

export function Header ({ onAddTask }: Props) {
  const [title, setTitle] = useState('')

  function handleSubmit (event: FormEvent) {
    event.preventDefault()

    onAddTask(title)
    setTitle('')
  }

  function handleTask(event:ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  return (
    <header className={styles.header}>
      <img src={Logo} />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='Insira uma nova tarefa' 
          onChange={handleTask} value={title}
          required
        />
        <button>
          Criar
          <AiOutlinePlusCircle size={20}/>
        </button>
      </form>
    </header>
  )
}