import "./App.css";
import { Footer } from "./components/Footer";
import List from "./components/List";
import Map from "./components/Map";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App bg-gray-300">
      <Navbar />
      <div className="grid grid-cols-12 pt-2 gap-4 px-1">
      <div className="col-span-4 ">
        <List />
        </div>
        <div className="col-span-8 border border-black ">
          <Map />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
