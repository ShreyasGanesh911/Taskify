import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Global/Navbar";
import Footer from "./Global/Footer";
import Home from "./Page/Home";

function App() {
  return (
    <>
    <BrowserRouter>

        <Navbar/>
         <Routes>
            <Route element={<Home/>} path="/"></Route>
         </Routes>
         <Footer/>

    </BrowserRouter>
    </>
  );
}

export default App;
