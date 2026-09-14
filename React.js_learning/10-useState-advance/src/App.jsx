import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(10);

  let buttonClicked = () => {
    
    // setNum(num+1)
    // setNum(num+1)
    // setNum(num+1)

    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
  };
  return (
    <div>
      <h1 className="m-10 text-6xl">{num}</h1>
      <button
        onClick={buttonClicked}
        className=" m-10 px-5 py-2 bg-amber-400 rounded-xl"
      >
        click me
      </button>
    </div>
  );
};
export default App;
