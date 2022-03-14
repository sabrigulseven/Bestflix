import './App.css';
import YerliFilmler from './components/YerliFilmler';
import YabanciFilmler from './components/YabanciFilmler';
import NavbarComponent from './components/NavbarComponent.js';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import Belgeseller from './components/Belgeseller';
import Home from './components/Home';
import YerliDiziler from './components/YerliDiziler';
import YabanciDiziler from './components/YabanciDiziler';

function App() {
  return (
    <div className="App"> 
      <Router> 
        <NavbarComponent/> 
        <Routes>
          <Route exact path='/' exact element={<Home/>} />
          <Route path='/filmler/yerli' exact element={<YerliFilmler/>} />
          <Route path='/filmler/yabanci' exact element={<YabanciFilmler/>} />
          <Route path='/diziler/yerli' exact element={<YerliDiziler/>} />
          <Route path='/diziler/yabanci' exact element={<YabanciDiziler/>} />
          <Route path='/belgeseller' exact element={<Belgeseller/>} />
        </Routes>
      </Router>     
    </div>
  );
}

export default App;
