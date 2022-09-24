import React, { useState } from 'react'
import './App.css'
import Headex from './Components/Headex'
import InputBox from './Components/InputBox'
import { Todo } from './Interface'

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      console.log(todos)
      setTodo('')

    }
  }
  return (
    <div className="App">
      <Headex />
      <InputBox todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  )
}

export default App