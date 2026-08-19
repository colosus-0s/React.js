import LeftContent from "./LeftContent.jsx";
import RightContent from "./RightContent";

const Section1Content = () => {
  return <div className="py-10 flex gap-10  items-center justify-between h-[90vh] px-14">
      <LeftContent/>
      <RightContent/>
  </div>;
};
export default Section1Content;
