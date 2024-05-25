
import { assets } from '../assets 2/assets'

function Nav() {
  return (
   <>
   <div className="nav flex h-16 justify-between w-full items-center p-10 mt-1">
    <h1 className=' text-xl font-medium text-title '>Gemini</h1>
   <div className="user">
   <img className='rounded-full w-12 ' src={assets.user_icon} alt="" />
   </div>
   </div>
   
   </>
  )
}

export default Nav
