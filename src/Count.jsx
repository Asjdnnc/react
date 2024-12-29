import {useState} from "react"
export default function Count(){
    const [count,setCount] = useState(0);
    let incCount = ()=>{
    setCount(count+1);
    }
    return(<>
    <p>count : {count}</p>
    <button onClick={incCount}>click me</button>
    </>);
}