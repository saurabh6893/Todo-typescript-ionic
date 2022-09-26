import React from 'react'
import { Todo } from '../Interface'
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const List: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {
        todos.map((todo) => (
          <div className="todo">
            <h3>{todo.todo}</h3>
            <button>X</button>
          </div>

        ))
      }
    </div >
  )
}

export default List