import {Phone} from 'lucide-react'
const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-6 px-24 cursor-pointer">
      <h4 className="bg-black font-semibold text-white px-2 py-1 rounded-full uppercase tracking-[3px] text-md">Target Audiance</h4>
      <button className="flex gap-4 font-semibold items-center uppercase tracking-[3px] text-md cursor-pointer"><Phone size={15}/> Digital Banking Platform</button>
    </div>
  )
}

export default Navbar
