import React , {useEffect , useState} from "react";

const Input = ()=>{

   const [InputValue , setInput] = useState("")

   const handlechange = (e)=>{
      setInput(e.target.value)

   
   }

   useEffect(()=>{
      console.log("input changed" , InputValue)
   } , [InputValue])

   return(
      <>
      <input className="mt-5 border border-blue-500 p-2 rounded-lg  ml-5 " type="text" name="username" id="unsername" value={InputValue} placeholder="Type something..." onChange={handlechange} /> <br />
      <input className="border mt-5 ml-5 rounded-lg p-2 border-blue-500" type="text" placeholder="Results..." value={InputValue} />
      </>
   )

}

export default Input;