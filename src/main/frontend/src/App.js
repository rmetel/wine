import {
  Container
} from "react-bootstrap";
import Nav from './component/NavBar';
import WineList from './component/WineList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Container className="mt-5">
        <WineList/>
      </Container>
    </div>
  );
}

export default App;
