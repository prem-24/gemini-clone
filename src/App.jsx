import SideBard from "./Components/SideBard";
import Home from "./Components/Home";
import { useContext } from "react";
import { Context } from "./context/Context";
function App() {
  return (
    <Wrapper>
      <SideBard />
      <Home />
    </Wrapper>
  );
}

function Wrapper({ children }) {

  const value = useContext(Context);
// console.log(value)

  return (
    <div className="flex h-screen">
      {children}
    </div>
  );
}

export default App;
