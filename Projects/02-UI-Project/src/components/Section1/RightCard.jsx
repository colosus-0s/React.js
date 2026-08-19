import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="bg-red-500 h-full w-100 relative rounded-4xl overflow-hidden shrink-0">
      <img className="w-full h-full object-cover" src={props.img} alt="" />
      <RightCardContent tag={props.tag} info={props.info} id={props.id}/>
    </div>
  );
};
export default RightCard;
