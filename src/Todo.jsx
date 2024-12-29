import {useState} from "react"
export default function Todo(){
    const [addTask,setaddTask] = useState(["sample"]);
    const [newTodo,setnewTodo] = useState("");
    let add = ()=>{
        setaddTask([...addTask,newTodo]);
        setnewTodo("");
      }
    let inputChange = (event)=>{
        setnewTodo(event.target.value);
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
                <li>{todo}</li>
            ))}
            </ul>
        </>
    );
}