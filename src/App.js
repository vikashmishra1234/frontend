import "./App.css";
import ContextState from "./Components/context/ContextState";
import Formdialog from "./Components/dialog/Formdialog";
import Facultylogin from "./Components/faculty/Facultylogin";
import Navbar from "./Components/navbar/Navbar";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ME from "./Components/branchs/ME";
import CS from "./Components/branchs/CS";
import EE from "./Components/branchs/EE";
import EC from "./Components/branchs/EC";
import ERP from "./Components/ERP";

function App() {
  return (
    <ContextState>
      <Router>
        <Routes>
          <Route exact path="/" element={<Facultylogin />}></Route>
          <Route exact path="/home" element={<Home />}>
       
          </Route>
          <Route exact path="home/me" element={<ME />} />
          <Route exact path="home/erp" element={<ERP />} />
          <Route exact path="home/cs" element={<CS />} />
          <Route exact path="home/ec" element={<EC />} />
          <Route exact path="home/ee" element={<EE />} />
        </Routes>
      </Router>
    </ContextState>
  );
}

export default App;
