import { useState } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import MyTodos from './MyTodos'

function App() {
      let [taskinput, setTaskinput] = useState('')
      let [lists, setLists] = useState([])
    
      const changeHandler = (e)=>{
            setTaskinput(e.target.value)
      }
      const onadd = ()=>{
        if(taskinput==='')
        {
          alert("value Must Enter")
        }
        else{
          setLists([...lists,{'id':nanoid(),text:taskinput}])
          setTaskinput('')
        }
        }
      const delData = (id)=>{
        let new_data = lists.filter((value)=>{
          return id!==value.id
        })
        setLists(new_data)
      }

      const upDat = (id)=>{
        lists.forEach((value)=>{
          if(value.id===id)
          {
            setTaskinput(value.text)
          }
        })
       
        delData(id)
      }
  return (
    <>
    <div className="todo">
    <h1>TODO LIST APP</h1> 
      <div className="todo1">
       <input type='text' name = 'input' id='input' className='todoinput' placeholder='Enter Your Task HERe' onChange={changeHandler} value = {taskinput}/>
       <button className='add' onClick={onadd}> +</button>
       </div>
      {
        lists.map((todo)=>(
            <MyTodos todo={todo} key={todo.id} delData ={delData} upDat = {upDat}></MyTodos>
        ))
      }

       {/* TODOs */}
      </div>
    </>
  )
}

export default App
