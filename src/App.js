import MainPage from './components/Mainpage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
      <div className='maincontent'>
    <BrowserRouter>
        <Routes>
        <Route index element={<MainPage/>} /> 
        <Route path="contact" element={<Contact />} />  
        </Routes>
    </BrowserRouter>
        <Footer/>
      </div>
  );
}

export default App;
