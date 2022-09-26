import React from 'react'
import { Todo } from '../Interface'
import TodoTask from './TodoTask';
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const List: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {
        todos.map((todo) => (
          <div>
            <TodoTask todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
          </div>

        ))
      }
    </div >
  )
}

export default List