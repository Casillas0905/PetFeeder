
import Register from "./pages/Register/Register";
import Welcome from "./pages/Welcome/Welcome";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router> 
      <Routes>
      <Route path="/Welcome" element={<Welcome />} />
      <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
