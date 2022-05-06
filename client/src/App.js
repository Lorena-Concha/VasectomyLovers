import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./views/Main";
import Login from "./views/Login";
import Register from "./views/Register";
import { UserProvider } from "./contexts/userContext";
import Home from "./views/Home";
import Asectomy from "./assests/Asectomy2.png"
import Experiences from "./components/Experiences";
import { useUser } from "./contexts/userContext";
import { useNavigate } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";


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

            <Route path="/experiencias" element= {<Experiences/>} />
          </Routes>
        </Router >

      </UserProvider >

      </div>
     
    </div >

  );
}

export default App;