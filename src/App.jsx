import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home.jsx";
import Game2048 from "./pages/2048.jsx";
import PiSong2 from "./pages/PiSong2.jsx";
import MathTutor from "./pages/MathTutor.jsx";

function App() {
    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/2048" element={<Game2048/>}/>
            <Route path="/pisong2" element={<PiSong2/>}/>
            <Route path="/mathtutor" element={<MathTutor/>}/>
        </Routes>
    </BrowserRouter>)
}

export default App
