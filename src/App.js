import "./App.css";
import "./index.css";
import Routers from "./router/Routers";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <div>
        <div></div>
      </div>
      <div></div>
      <Routers />
    </div>
  );
}

export default App;
