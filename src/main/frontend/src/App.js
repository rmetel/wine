import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import Nav from './component/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Button variant="primary">Primary</Button>
    </div>
  );
}

export default App;
