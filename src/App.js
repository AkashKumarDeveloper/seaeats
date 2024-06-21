import logo from "./logo.svg";
import "./App.css";
import Topnav from "./components/Topnav";
import Featured from "./components/Featured";
import Delivery from "./components/Delivery";

function App() {
  return (
    <div className="App">
      <Topnav />
      <Featured />
      <Delivery />
    </div>
  );
}

export default App;
