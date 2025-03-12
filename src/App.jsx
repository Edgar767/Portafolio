import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Navbar from "./components/Navbar";
import DarkVoidGradient from './components/DarkVoidGradient';

function App() {

  return (
    <Router>
      <Navbar />
      <DarkVoidGradient />
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </Router>
  )
}

export default App;