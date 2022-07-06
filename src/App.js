import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from "./components/Home"
import Login from './components/Login';
import Starred from './components/starred/Starred';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/starred" element={<Starred/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
