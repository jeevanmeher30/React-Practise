import React from "react"
import Log from "./pages/Log"
import Reg from "./pages/Reg"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Home from "./pages/Home"
import Nav from "./pages/Nav"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App=()=>{
    return(
        <div>


            {/* `<Nav/>` */}

            <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/log" element={<Log/>}/>
                <Route path="/reg" element={<Reg/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>

            </BrowserRouter>
{/* 
            <Log/>
            <Reg/>
            <About/>
            <Contact/>
 */}


        </div>
    )
}

export default App