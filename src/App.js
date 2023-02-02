import "./App.css"
import CSidebar from "./components/CSidebar";
import { Middle } from "./components/Middle";
import { SideBar } from "./components/SideBar";

function App() {

  document.body.classList.add("no-scroll");

  return (
      <div className="App">
        <div className="sidebar-sticky">
          <SideBar/>
        </div>
        <div className="all-components row m-0">
          <div className="middle-components col-md-10" >
            <Middle  />
          </div>
          <div className="right-side-bar col-md-2">
          </div>
        </div>
      </div>
  );
}

export default App;
