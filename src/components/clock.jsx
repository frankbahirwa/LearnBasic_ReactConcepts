import React, { useState, useEffect } from 'react';

const Clock = ()=>{
const [time , setTime] = useState(new Date())

useEffect(()=>{
const actual = setInterval(()=>{
setTime(new Date())
},1000)

return ()=> clearInterval(actual)
} , [])

return(

<>

<p className='ml-5 mt-5 text-blue-700'>current time is : {time.toLocaleTimeString()}</p>

</>

)
}

export default Clock;