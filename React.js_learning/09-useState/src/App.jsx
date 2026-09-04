import { useState } from "react"

const App = () => {
  const [num, setNum] = useState(20)
  const [user, setuser] = useState("shoeb")
  const [arr, setArr] = useState([10,20,30])
  const change = ()=>{
    setNum(30)
    setuser("ansari")
    setArr([40,50,60])
  }
  return (
    <div>
    <h1>value of num is {num} <br/> {user} <br/> {arr} </h1>
    <button onClick={change}  className="px-10 py-5 bg-amber-500">click</button>
    </div>
  )
}

export default App
