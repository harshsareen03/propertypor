import { Headers } from "./components/Headers";
import Propertylist from "./components/Propertylist";



function App() {
  return (
    <>
    <Headers/>
    <div className="m-5">

    <Propertylist itemsPerPage={6}/>
    </div>
    
    </>
  );
}

export default App;
