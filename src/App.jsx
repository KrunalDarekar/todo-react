import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [todoList, setTodoList] = useState([])

  return (
    <>
      <TodoInput toSetData={setTodoList} data={todoList}/>
      <TodoList toSetData={setTodoList} data={todoList}/>
    </>
  )
}

export default App
