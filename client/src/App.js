import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./views/Main";
import Login from "./views/Login";
import Register from "./views/Register";
import { UserProvider } from "./contexts/userContext";
import Home from "./views/Home";
import Asectomy from "./assests/Asectomy2.png"
import Experiences from "./components/Experiences";
import NavBar from "./components/Navbar";
import Vasectomia from "./views/Vasectomia";
import DondeRealizarse from "./views/DondeRealizarse";
import CuantoSale from "./views/CuantoSale";
import Mitos from "./views/Mitos";
import Espermiograma from "./views/Espermiograma";
import ResponsabilidadAfectiva from "./views/ResponsabilidadAfectiva";
import Est from "./views/Est";
import Contacta from "./views/Contacta";
import Footer from "./components/Footer";

function Root(){
  
}

function App() {
  return (
    <div className="App">
      <div>
      
      <UserProvider>
        <Router>
          
          <nav >
            <div className="navbar-nav flex-row justify-content-around text-white">
              <img src={Asectomy} width="400" height="150"></img>
              <ul className="navbar-nav flex-row align-items-center m-2">
                <li className="nav-item m-2 text-white">
                  <Link to="/" className='btn btn-outline-light'>Home</Link>
                </li>
                <li className="nav-item m-2">
                  <Link to="/login" className='btn btn-outline-light'>Login</Link>
                </li>
                <li className="nav-item m-2">
                  <Link to="/registro" className='btn btn-outline-light'>Registro</Link>
                </li>

               
              </ul>
            </div>
            <NavBar/>
            <div>

            </div>

          </nav>
               
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/main" element={<Main/>} />
            <Route path="/registro" element={<Register />} />

            <Route path="/queeslavasectomia" element={<Vasectomia/>} />
            <Route path="/donderealizarcelavasectomia" element={<DondeRealizarse/>} />
            <Route path="/cuantosalelavasectomia" element={<CuantoSale/>} />
            <Route path="/mitos" element={<Mitos/>} />

            <Route path="/experiencias" element= {<Experiences/>} />
            <Route path="/espermiograma" element= {<Espermiograma/>} />

            <Route path="/queeslaresponsabilidadafectiva" element= {<ResponsabilidadAfectiva/>} />
            <Route path="/est" element= {<Est/>} />

            <Route path="/contacta" element= {<Contacta/>} />

          </Routes>
          <div><Footer/></div>
        </Router >

      </UserProvider >

      </div>

    </div >

  );
}

export default App;