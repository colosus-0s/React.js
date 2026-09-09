import { useState } from "react";

const App = () => {
  let [Counter, setCounter] = useState(0);


  function startCounter() {
    setCounter(Counter+1)
  }
  function stopCounter(){
    setCounter(Counter-1)
  }

  function jumpby5(){
    setCounter(Counter+5)
  }
  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">

    <div className="m-10 flex justify-center flex-col items-center h-full">
      <h2 className="mb-5 bg-gray-500 w-fit text-5xl py-3 px-10 rounded-md">{Counter}</h2>
      <div className="flex gap-3">
        <button onClick={startCounter} className="px-3 py-2 bg-amber-500 rounded-md cursor-pointer" >Start Counter</button>
        <button onClick={stopCounter} className="px-3 py-2 bg-amber-700 rounded-md cursor-pointer" >Stop Counter</button>
      </div>
      <button onClick={jumpby5} className="mt-5 px-3 py-2 bg-amber-900 rounded-md cursor-pointer">increase by 5</button>
    </div>
    </div>
  );
};

export default App;
