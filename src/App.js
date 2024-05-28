import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./index.css";
import Routers from "./router/Routers";
import axios from "axios";
import { Toaster } from "react-hot-toast";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>

      <Toaster position="top-center" reverseOrder={false}/>
      <Routers />
    
    </div>
  );
}

export default App;
