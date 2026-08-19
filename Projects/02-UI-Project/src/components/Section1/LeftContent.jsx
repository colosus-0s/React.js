import HeroText from './HeroText';
import ArrowRight from './ArrowRight';
const LeftContent = () => {
  return (
    <div className="h-full w-1/4  p-10 flex flex-col justify-between font-bold">
      <HeroText/>
      <ArrowRight/>
    </div>
  )
}

export default LeftContent
