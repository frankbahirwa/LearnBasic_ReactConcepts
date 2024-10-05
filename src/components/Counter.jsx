import react , { useEffect, useState } from "react";
import Button from "./button";
import Input from "./events";
import Clock from "./clock";
import Timer from "./timer";
import SimpleForm from "./validation";
import AnalogClock from "./analog";

const button1 = "Increment me!"
const button2 = "Decrement me!"

const Counter = ()=>{
const [count , setcount] = useState(0)
const [color , setcolor] =useState('white')

 const increment = ()=>{
    setcount(count + 1)
}

const decrement = ()=>{
   setcount(count - 1)
}

const onhover = (colors)=>{
   setcolor(colors )
}

const mouseleave = (colors)=>{
   setcolor(colors )
}

return(
<> 
<div style={{background:color}}>
<p className="text-blue-700 mt-5 ml-5 mx-auto"> Count:{count}</p>
<br />

<Button button={button1} onmouse  functions={increment} hover={()=>onhover('yellow')} mouseleave={()=>mouseleave('red')}/> 
<Button button={button1}  functions={decrement} hover={()=>onhover('blue')} mouseleave={()=>mouseleave('lightgreen')}/> 

<Timer />
<Input />
<Clock />
<AnalogClock />
<SimpleForm />
</div>

</>
)
}
export default Counter