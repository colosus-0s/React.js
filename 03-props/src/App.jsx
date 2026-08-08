import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Dilkash Parwej"
        age={20}
        img="https://images.unsplash.com/photo-1785369989043-2e5f6c8f21f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjN8fHxlbnwwfHx8fHw%3D"
      />
      <Card
        user="Shoeb Ansari"
        age={20}
        img="https://images.unsplash.com/photo-1764352104218-2d3a899ce36c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDB8fHxlbnwwfHx8fHw%3D"
      />
      <Card
        user="Krishna Kumar"
        age={20}
        img="https://images.unsplash.com/photo-1777973320577-7ea820fc57a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxODN8fHxlbnwwfHx8fHw%3D"
      />
      <Card
        user="Unknown"
        age={30}
        img="https://images.unsplash.com/photo-1784988830862-91533b18a6d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOTF8fHxlbnwwfHx8fHw%3D"
      />
    </div>
  );
};

export default App;
