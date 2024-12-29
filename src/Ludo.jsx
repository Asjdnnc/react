import {useState} from "react"
export default function Ludo(){
    const [move,setMove] = useState({blue:0,red:0,green:0,yellow:0})
    let countBlue = ()=>{
        setMove((preMove)=>{
            return {...preMove,blue:preMove.blue+1};
        });
    }
    let countYellow = ()=>{
        setMove((preMove)=>{
            return {...preMove,yellow:preMove.yellow+1};
        });
    }
    let countRed = ()=>{
        setMove((preMove)=>{
            return {...preMove,red:preMove.red+1};
        });
    }
    let countGreen = ()=>{
        setMove((preMove)=>{
            return {...preMove,green:preMove.green+1};
        });
    }
    return (
        <div>
            <p>Blue moves : {move.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={countBlue}>+1</button>
            <p>Red moves : {move.red}</p>
            <button style={{backgroundColor:"red"}} onClick={countRed}>+1</button>
            <p>Green moves : {move.green} </p>
            <button style={{backgroundColor:"green"}} onClick={countGreen}>+1</button>
            <p>Yellow moves : {move.yellow}</p>
            <button style={{backgroundColor:"yellow"}} onClick={countYellow}>+1</button>
        </div>
    );
}