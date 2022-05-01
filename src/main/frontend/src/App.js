import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navi from './component/Navi';
import WineList from './component/WineList';
import WineDetails from './component/WineDetails';
import RedWine from './component/RedWine';
import WhiteWine from './component/WhiteWine';
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
          <Route path="/wine/:wineId" element={<WineDetails/>} />
          <Route path="/category/red" element={<RedWine/>} />
          <Route path="/category/white" element={<WhiteWine/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
