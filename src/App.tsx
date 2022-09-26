import React, { useState } from 'react'
import './App.css'
import Headex from './Components/Headex'
import InputBox from './Components/InputBox'
import List from './Components/List'
import { Todo } from './Interface'

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo('')
    }
  }
  return (
    <div className="App" style={{ margin: '0rem 1rem', paddingTop: "env(safe-area-inset-top)" }}>
      <Headex />
      <InputBox todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App