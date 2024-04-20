import AdminLogin from './Admin/adminLogin';
import './App.css';
import Header from './components/Header/Header';
import "./index.css";
import Routers from './router/Routers';

function App() {
  return (
    <div>
    <div>
    <div>
    <div className="bg-blue-500 text-center py-3 shadow-xl font-sans">
            {/* Here font-sans class applies the default sans-serif font */}
            <span className="text-white font-bold text-lg">FAMILY CARE DISPENSARY</span>
          </div>
</div>
</div>
 <div></div>  
      <Routers/> 
    </div>

  );
}

export default App;
