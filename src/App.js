import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Branches from './pages/Branches';
import Events from './pages/Events';
import Rewards from './pages/Rewards';
import Tournaments from './pages/Tournaments';
import GamingGuide from './pages/GamingGuide';
import ResponsibleGaming from './pages/ResponsibleGaming';
import AboutUs from './pages/AboutUs';
// import Register from "./pages/register";
// import Login from "./pages/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/branches" element={<Branches />}/> 
          <Route path="/events" element={<Events />}/> 
          <Route path="/rewards" element={<Rewards />}/> 
          <Route path="/tournaments" element={<Tournaments />}/> 
          <Route path="/gaming-guide" element={<GamingGuide />}/> 
          <Route path="/responsible-gaming" element={<ResponsibleGaming />}/>
          <Route path="/about-us" element={<AboutUs />}/>
          {/* <Route path="/register" element={<Register />}/>  
          <Route path="/login" element={<Login />}/>   */}
        </Routes>
      </Router>
    </div>
  );
}


export default App;
