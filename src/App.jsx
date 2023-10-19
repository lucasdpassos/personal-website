import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home from './pages/Home';
import './App.css'


function App() {
  return (
    <Router>

<div className="fixed top-0 left-0 w-full bg-effect text-white z-50 py-2 text-center shadow-md font-light text-sm">
          <span className="inline-flex items-center">
          <FontAwesomeIcon icon="mobile-alt" />
            <i className="fa fa-mobile-alt mr-2 font-extralight"></i> 
            Este site é mobile friendly!
          </span>
        </div>


        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>

    </Router>
  );
}

export default App;
