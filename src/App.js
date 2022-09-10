import './App.css';
import {BrowserRouter as Router ,Routes,Route, Link} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Profil from './Pages/Profil';
import Errorpage from './Pages/Errorpage';
function App() {
  return (
    <div className="App">
     <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Profil">Profil</Link>

      </nav>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/profil/:username" element={<Profil/>}/>
<Route path="*" element={<Errorpage/>}/>
</Routes>
     </Router>
    </div>
  );
}

export default App;
