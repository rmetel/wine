import logo from './logo.svg';
import Nav from './component/NavBar';
import WineList from './component/WineList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <WineList/>
    </div>
  );
}

export default App;
