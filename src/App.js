import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Works from './components/Works';
import W6 from './workComponents/Work6';
import W9 from './workComponents/Work9';
import W10 from './workComponents/Work10';
import W14 from './workComponents/Work14';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        
        <Routes>
          <Route path="/pf" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/works" element={<Works />} />
          <Route path="/w6" element={<W6 />} />
          <Route path="/w9" element={<W9 />} />
          <Route path="/w10" element={<W10 />} />
          <Route path="/w14" element={<W14 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
