import React,{lazy, Suspense} from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";

const Homepage=lazy(()=> import("./components/Homepage"));
const Navbar=lazy(()=> import("./components/Navbar/Navbar"));

function App() {

  return (
    <>    
      <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route path={"/"} element={<Homepage/>}/>  
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
