import Greet from "./Greet"
import Nav from "./Nav"


function Home() {
  return (
  
  <div className="Home h-screen overflow-scroll md:overflow-hidden  w-full flex-col ">
  <Nav/>
   <Greet/>
  </div>
 
  )
}

export default Home
