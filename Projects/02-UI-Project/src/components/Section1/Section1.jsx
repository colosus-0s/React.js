import Navbar from "./Navbar"
import Section1Content from "./Section1Content"

const section1 = (props) => {
  return (
    <div className="h-screen w-full ">
    <Navbar/>
    <Section1Content users={props.users}/>
    </div>
  )
}

export default section1
