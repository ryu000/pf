import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Works from './components/Works';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
