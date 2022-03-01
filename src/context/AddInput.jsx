import React, { useState } from "react"
import { v4 as uuid } from "uuid"

export const UserContext = React.createContext({})

export function SearchInput({ children }) {
  const [input, setInput] = useState("")
  const [tasks, setTasks] = useState([])
  const [filteredTasks, setFilteredTasks] = useState([])
  const [filterType, setFiltertype] = useState("all")

  function addTask(name) {
    if (name === "") return

    const task = {
      name,
      isCompled: false,
      id: uuid(),
    }
    setTasks([...tasks, task])
  }
  function clearCompledTasks() {
    const newsTaks = tasks.filter((el) => !el.isCompled)
    setTasks(newsTaks)
    setFilteredTasks(newsTaks)
}
  function completeTask(id) {
    const newTasks = tasks.map((el) => {
      if (el.id === id) {
        el.isCompled = !el.isCompled
      }
      return el
    })
    setTasks(newTasks)
    console.log(tasks)
  }
  function mostrarTaskComplete() {
    const filterComplete = tasks.filter(el => el.isCompled)
    setFiltertype("completed")
    setFilteredTasks(filterComplete)
  }

  function showComplete() {
    const showTask = tasks.filter(el => !el.isCompled)
    setFiltertype("active")
    setFilteredTasks(showTask)
  }

  function setAll() {
    setFiltertype("all")
  }

  const valor = {
    input,
    setInput,
    tasks,
    setAll,
    addTask,
    completeTask,
    clearCompledTasks,
    mostrarTaskComplete,
    filteredTasks,
    filterType,
    showComplete,
  }

  return <UserContext.Provider value={valor}>{children}</UserContext.Provider>
}
