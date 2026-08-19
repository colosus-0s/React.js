import Section1 from "./components/Section1/Section1";
import Section2 from "./components/section2/section2";
const App = () => {
  const users = [
    {_id:1,
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptates cum optio voluptas modi iusto neque consequuntur quibusdam vero reiciendis!",
      tag: "Satisfied",
    },
    {_id:2,
      img: "https://plus.unsplash.com/premium_photo-1696942353618-bfd222266617?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
      info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, alias assumenda aperiam amet itaque sapiente! Modi beatae voluptas maiores? Non.",
      tag: "Underserved",
    },
    {_id:3,
      img:'https://plus.unsplash.com/premium_photo-1661594430156-6d5973b67131?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      info:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore fuga totam esse doloremque quae odio deleniti tempora sit accusamus consectetur?',
      tag:'Underbanked'
    }
  ];
  return (
    <div className="h-screen w-full ">
      <Section1 users={users}/>
      <Section2 />
    </div>
  );
};

export default App;
