import {useState} from "react"
import { v4 as uuidv4 } from 'uuid';
export default function Todo(){
    let [addTask,setaddTask] = useState([{task:"sample task",id:uuidv4(),status:false}]);
    let [newTodo,setnewTodo] = useState("");
    let add = ()=>{
        if(newTodo.trim()==="") return;
        setaddTask((prevtodo)=>{
          return  [...prevtodo,{task:newTodo,id:uuidv4(),status:false}]
        });
        setnewTodo("");
      }
    let inputChange = (event)=>{
        setnewTodo(event.target.value);
    }
    let remove = (id)=>{
            setaddTask((task)=>task.filter(value=>value.id!=id));
            }
    let mark = ()=>{
        setaddTask((pretask)=>
           pretask.map((task)=>({
                 ...task,done:true}))
        )
    } 
    let markDone = (id)=>{
        setaddTask((pretask)=>
            pretask.map((task)=>
                task.id == id?{...task,done:!task.done}:task
            )
        )
    }
    return (
        <>
        <h4>Todo List</h4>
        <input placeholder="add task" value={newTodo} onChange={inputChange}></input> 
        &nbsp;&nbsp;
        <button onClick={add}>submit</button>
        <hr></hr>
        <p>Tasks are : </p>
            <ul>
                {addTask.map((todo)=>(
                <li key={todo.id}><span style={{textDecoration:todo.done?"line-through":"none"}}>{todo.task}</span> &nbsp; 
                <button onClick={()=>remove(todo.id)}>delete</button> &nbsp;
                <button onClick={()=>markDone(todo.id)}>mark as done</button>
                </li>
                
            ))}
            </ul>
            <button onClick={mark}>mark all done</button>
        </> 
        
    );
}