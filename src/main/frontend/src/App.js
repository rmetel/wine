import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navi from './component/Navi';
import WineList from './component/WineList';
import GetWineById from './component/WineDetails';
import Cart from './component/Cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navi/>
        <Routes>
          <Route path="/" element={<WineList/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/wine/:wineId" element={<GetWineById/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
