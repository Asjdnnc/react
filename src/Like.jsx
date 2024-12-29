import {useState} from "react"
export default function Like(){
const [like,setlike] = useState(false);
let clicked = ()=>{
    setlike(!like);
}
let style = {color:"red"};
return(
    <p onClick={clicked}>
        {like?(<i style={style} className="fa-solid fa-heart"></i>):(<i style={style} className="fa-regular fa-heart"></i>)}
    </p>
)
}