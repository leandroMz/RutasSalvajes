import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { NavBar } from "./components/navBar/NavBar"
import { Home } from "./routes/home/Home";
import { Detail } from "./routes/detail/Detail";
import { Category } from "./routes/category/Category";
import { Footer } from "./components/footer/Footer";

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/detail' element={<Detail/>} />
      <Route path='/category' element={<Category/>} />

      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
