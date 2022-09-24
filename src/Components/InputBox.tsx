import React, { useRef } from 'react'

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputBox: React.FC<Props> = ({ setTodo, todo, handleAdd }) => {
  const refz = useRef<HTMLInputElement>(null)
  return (
    <form onSubmit={(e) => {
      handleAdd(e)
      refz.current?.blur()
    }} className="form">

      <div className="inputbox">
        <input type="text" ref={refz} value={todo} onChange={(e) => setTodo(e.target.value)} className="inputt" placeholder='Create a Task' />
        <button className="inputtbtn" type="submit">Push</button>
      </div>
    </form >
  )
}

export default InputBox