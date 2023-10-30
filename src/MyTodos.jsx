import React from 'react'

export default function MyTodos({todo, delData,upDat}) {
    
  return (
    <div className='todo2'>
        <h1 className='list'>{todo.text}</h1>
        <div className="todo2_1">
            <button className='delete' onClick={()=>delData(todo.id)}>
            <i class="material-icons">delete</i>
            </button>
            <button className='edit' onClick={()=>upDat(todo.id)}>
            <i class="material-icons">edit</i>
            </button>
        </div>
    </div>
  )
}
