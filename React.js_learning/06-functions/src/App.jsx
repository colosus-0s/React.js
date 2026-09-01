const App = () => {
  function scrolling(elem) {
    console.log(elem);
  }
  return (
    <div
      onWheel={(elem) => {
        scrolling(elem.deltaY);
      }}
    >
      <div className="h-screen w-full bg-gray-600"></div>
      <div className=" h-screen w-full bg-red-300"></div>
      <div className="h-screen w-full bg-amber-500"></div>
    </div>
  );
};

export default App;
