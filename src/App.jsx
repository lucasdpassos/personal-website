import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';



function App() {
  return (
    <Router>
      <div className="h-screen bg-gray-100">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
