import { ArrowRight } from "lucide-react"

const RightCardContent = (props) => {
  console.log(props.color)
  return (
    <div>
      <div className="w-full h-full absolute top-0 left-0 flex items-start justify-between flex-col px-10 py-8">
        <h2 className="bg-white h-10 w-10 rounded-full items-center justify-center flex font-semibold">{props.id}</h2>
        <div className="flex flex-col justify-between gap-30">
          <p className="text-shadow-2xs w-80 text-white font-semibold ">
           {props.info}
          </p>
          <div className=" w-75 flex items-center justify-between">
            <button style={{backgroundColor:props.color}}  className="px-10 py-3 rounded-full text-white font-semibold cursor-pointer">{props.tag}</button>
            <button style={{backgroundColor:props.color}} className="bg-blue-600 px-3 py-3 rounded-full text-white font-semibold cursor-pointer">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default RightCardContent
