import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Articles from './components/Articles/Articles';
import Testimonials from './components/Testimonials/Testimonials';
import Team from './components/Team/Team';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';

import 'lightbox2/dist/css/lightbox.min.css';
import 'lightbox2/dist/js/lightbox.min.js';

function App() {
  return (
    <div >
<Router>
    <Navigation/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/team' element={<Team/>}/>
    <Route path='/articles' element={<Articles/>}/>
    <Route path='/testimonials' element={<Testimonials/>}/>
    <Route path='/education' element={<Education/>}/>
    </Routes>
    <Footer/>
</Router>
    </div>
  );
}

export default App;
