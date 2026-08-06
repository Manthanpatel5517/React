import { useState } from "react";

function App(){

  const  initialState = {
    Name : "",
    Email : "",
    Password : ""

  }

  const [data,setdata]= useState( initialState)

  function handlechage(e){
    setdata({...data,[e.target.name]:e.target.value})

  }

    function handlesubmit(e){
      e.preventDefault();
      console.log(data)
      localStorage.setItem("studentdata",JSON.stringify(data))
    }


  return (
    <>
      <form onSubmit={handlesubmit}>
            <input type="text" placeholder="Name" name="Name" onChange={(e)=>handlechage(e)}/><br></br>
            <input type="text" placeholder="Email" name="Email"  onChange={(e)=>handlechage(e)}/><br></br>
            <input type="text" placeholder="Password" name="Password"  onChange={(e)=>handlechage(e)}/><br></br>
            <input type="Submit" />
      </form>
    
    </>
  )
}
export default App