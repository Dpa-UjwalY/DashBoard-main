import "./App.css"
import CSidebar from "./components/CSidebar";
import { Middle } from "./components/Middle";
import { SideBar } from "./components/SideBar";

function App() {
  return (
      <div className="App">
        <SideBar/>
        <Middle  />
        <div className="right-side-bar" ></div>
      </div>
  );
}

export default App;
