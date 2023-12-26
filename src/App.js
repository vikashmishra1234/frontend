
import './App.css';
import ContextState from './Components/context/ContextState';
import Formdialog from './Components/dialog/Formdialog';
import Facultylogin from './Components/faculty/Facultylogin';
import Navbar from './Components/navbar/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <ContextState>
    <Router>
      <Routes>
        <Route exact path ='/' element={<Facultylogin/>} ></Route>
        <Route exact path ='/home' element={<Home/>} ></Route>
      </Routes>
    </Router>
    </ContextState>

 
   
  );
}

export default App;
