import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import { UserProvider, useUser } from "./contexts/userContext";
import Home from "./views/Home";
import Experiences from "./components/Experiences";
import NavBar from "./components/Navbar";
import Vasectomia from "./views/Vasectomia";
import DondeRealizarse from "./views/DondeRealizarse";
import Mitos from "./views/Mitos";
import Espermeograma from "./views/Espermeograma";
import ResponsabilidadAfectiva from "./views/ResponsabilidadAfectiva";
import Est from "./views/Est";
import Contacta from "./views/Contacta";
import Footer from "./components/Footer";
import Testimonios from "./views/Testimonios";
import Comentarios from "./views/Comentarios";
import Map from "./views/Map";
import Botonera from "./components/Botonera";

function App() {
  return (
    <div className="App">
      <div>
      
      <UserProvider>
        <Router>
          
          <nav >
            <Botonera/>
            <NavBar/>
            <div>

            </div>

          </nav>
               
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />} />

            <Route path="/queeslavasectomia" element={<Vasectomia/>} />
            <Route path="/donderealizarcelavasectomia" element={<DondeRealizarse/>} />
            <Route path="/mitos" element={<Mitos/>} />

            <Route path="/experiencias" element= {<Experiences/>} />
            <Route path="/testimonios" element= {<Testimonios/>} />
            <Route path="/espermeograma" element= {<Espermeograma/>} />

            <Route path="/queeslaresponsabilidadafectiva" element= {<ResponsabilidadAfectiva/>} />
            <Route path="/est" element= {<Est/>} />

            <Route path="/contacta" element= {<Contacta/>} />
            <Route path="/comentarios/:id" element= {<Comentarios/>} />
            <Route path="/map" element= {<Map/>} />
          </Routes>
          <div><Footer/></div>
        </Router >

      </UserProvider >

      </div>
    </div >

  );
}

export default App;