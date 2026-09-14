import { useState } from "react"

const App = () => {

  const [num, setNum] = useState([10,20,30,40])

  let buttonClicked = ()=>{
    // const newNum = [...num]
    // newNum.push(99)

    // setNum(newNum)
    // console.log(newNum)
    setNum(newNum=>([...newNum,99]
   
    ))


  }
  return (
    <div>
      <h1 className="m-10 text-6xl">{num.map((num)=>{
        return num
      })}</h1>
      <button onClick={buttonClicked} className=" m-10 px-5 py-2 bg-amber-400 rounded-xl">click me</button>
    </div>
  )
}
export default App
