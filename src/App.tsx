import { Header } from "./components/Header/header"
import { Tasks } from "./components/Tasks"

import { useState, useEffect } from 'react'

const LOCAL_STORAGE_KEY = 'todo:tasks'

export interface ITask {
  id: string
  title: string
  isCompleted: boolean
}

function App() {
  const [task, setTask] = useState<ITask[]>([])

  function addTask(taskTitle: string) {
    setTasksAndSave([
      ...task,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  function deleteTaskById (taskId: string) {
    const newTasks = task.filter(tasks => tasks.id !== taskId)
    setTasksAndSave(newTasks)
  }

  function toggleCompletedTaskById (taskId: string) {
    const newTasks = task.map(tasks => {
      if (tasks.id === taskId) {
        return {
          ...tasks, 
          isCompleted: !tasks.isCompleted
        }
      }
      return tasks
    })

    setTasksAndSave(newTasks)
  }

  function setTasksAndSave (newTasks: ITask[]) {
    setTask(newTasks)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }

  function loadSavedTasks () {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)

    if (saved) {
      setTask(JSON.parse(saved))
    }
  }

  useEffect(() => {
    loadSavedTasks()
  }, [])

  return (
    <>
      <Header onAddTask={addTask}/>
      <Tasks 
        tasks={task} 
        onDelete={deleteTaskById} 
        onToggleCompleted={toggleCompletedTaskById}
      />
    </>
  )
}

export default App
