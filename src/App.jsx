import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Navbar from "./components/Navbar";
import BGrid from "./components/BGrid";

function App() {

  return (
    <Router>
      <Navbar />
      <BGrid />
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </Router>
  )
}

export default App;