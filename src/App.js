import "./App.css";
import Addtask from "./compo/Add_task/Addtask";
import Listtask from "./compo/Listtask/Listtask";

function App() {
  return (
    <div className="App">
      <Addtask />
      <Listtask />
    </div>
  );
}

export default App;
