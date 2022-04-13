import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Nav from './component/NavBar';
import WineList from './component/WineList';
import Cart from './component/Cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<WineList/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
