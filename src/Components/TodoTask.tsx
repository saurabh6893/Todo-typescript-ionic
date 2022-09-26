import React, { useState } from 'react'
import { Todo } from '../Interface'
import { MdPublishedWithChanges, MdDeleteForever, MdOutlineCheck } from 'react-icons/md';


type Props = {
  todo: Todo,
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoTask: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const check = (id: number) => {
    setTodos(todos.map((todo) => todo.id === id ? {
      ...todo, isDone: !todo.isDone
    } : todo)
    )
  }
  const del = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const editTask = (e: React.FormEvent, id: number) => {
    e.preventDefault()
    setTodos(todos.map((todo) => (
      todo.id === id ? { ...todo, todo: editTodo } : todo
    )))
    setEdit(false)
  }
  return (
    <form className="todo" onSubmit={(e) => editTask(e, todo.id)}>

      {edit ? (
        <input type="text" value={editTodo} onChange={(e) => {
          setEditTodo(e.target.value);
        }} className='soloinput' />
      ) : (
        todo.isDone ? (<s className='tsx'>{todo.todo}</s>) : <span className='tsx'>{todo.todo}</span>
      )}



      <div className="options">

        <span onClick={() => {
          if (!edit && !todo.isDone) {
            setEdit(!edit)
          }
        }
        }><MdPublishedWithChanges /></span>
        <span onClick={() => del(todo.id)}> <MdDeleteForever /></span>

        <span onClick={() => check(todo.id)}><MdOutlineCheck /></span>
      </div>


    </form >
  )
}

export default TodoTask


  // < h3 > { todo.todo }</h3 >
  //   <button>X</button>