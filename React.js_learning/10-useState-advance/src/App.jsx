import { useState } from "react"

const App = () => {

  const [num, setNum] = useState({user:"shoeb",age:20})

  let buttonClicked = ()=>{
    // const newNum = {...num}
    // newNum.user = "Ansari"
    // // console.log(newNum)
    // setNum(newNum)
    // // console.log(num)
    // console.log(newNum)

    setNum(newNum=>({...newNum,
        user:"Ansari",
        age:21
    }))


  }
  return (
    <div>
      <h1 className="m-10 text-6xl">{num.user}, {num.age}</h1>
      <button onClick={buttonClicked} className=" m-10 px-5 py-2 bg-amber-400 rounded-xl">click me</button>
    </div>
  )
}
export default App
