import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div className="h-full w-3/4 flex gap-8 p-6 flex-nowrap overflow-x-auto">
        {props.users.map((elem,idx)=>{
          return <RightCard img={elem.img} info={elem.info} tag={elem.tag} key={idx} id={idx+1  }/>
        })}

    </div>
  );
};

export default RightContent;
