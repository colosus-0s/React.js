import LeftContent from "./LeftContent.jsx";
import RightContent from "./RightContent.jsx";
const Section1Content = (props) => {
  console.log(props)
  return (
    <div className="py-10 flex gap-10  items-center justify-between h-[90vh] px-14">
      
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  );
};
export default Section1Content;
