import './App.css';
import { Routes ,Route} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Digital from './components/Digital';
import HomePage from './components/HomePage';
import Music from './components/Music';
import Navbar from './components/Navbar';
import Sponser from './components/Sponser';
import Talent from './components/Talent';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<HomePage />}></Route>
         <Route path="about" element={<About/>}></Route>
          <Route path="talent" element={<Talent/>}></Route>
           <Route path="digital" element={<Digital/>}></Route>
            <Route path="sponser" element={<Sponser/>}></Route>
             <Route path="music" element={<Music/>}></Route>
              <Route path="contact" element={<Contact/>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;