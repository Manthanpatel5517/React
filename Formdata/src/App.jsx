import { useEffect, useState } from "react"
import "./App.css";

function App() {

  const [Name, Setname] = useState("")
  const [Email, Setemail] = useState("")
  const [Password, Setpassword] = useState("")


  function submitdata(e) {
    e.preventDefault();

    let data = {
      Name,
      Email,
      Password
    }

    console.log(data);
    localStorage.setItem("studentdata",JSON.stringify(data));


  }


  return (

    <>
  <form onSubmit={submitdata}>
      <input type="text" placeholder="Name" onChange={(e) => Setname(e.target.value)} /><br></br>
      <input type="text" placeholder="Email" onChange={(e) => Setemail(e.target.value)} /><br></br>
      <input type="text" placeholder="Password" onChange={(e) => Setpassword(e.target.value)} /><br></br>
      <input type="submit" />
      </form>

    </>
  )
}
export default App