import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

import Home from './pages/Home';
import About from './pages/about';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Log from './pages/Log';
import Header from './components/Header';


export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Log/>} />
      </Routes>
    </BrowserRouter>
  );
}
      
      