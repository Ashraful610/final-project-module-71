import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Reviews from './Pages/Reviews/Reviews';
import ContactUs from './Pages/Contact Us/ContactUs';
import Login from './Pages/Login/Login';
import Footer from '../src/Pages/Shared/Footer'
import SignUp from './Pages/SignUp/SignUp';
import RequirthAuth from './Pages/Login/RequirthAuth';

function App() {
  return (
    <div>
      <Navbar></Navbar>
       <Routes>
         <Route path="/" element={<Home></Home>} ></Route>
         <Route path="/about" element={<About></About>}></Route>
         <Route path="/appointment" element={
           <RequirthAuth>
                 <Appointment></Appointment>
           </RequirthAuth>
         }></Route>
         <Route path="/reviews" element={<Reviews></Reviews>}></Route>
         <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
         <Route path="/login" element={<Login></Login>}></Route>
         <Route path="/signup" element={<SignUp/>}></Route>

       </Routes>
    </div>
  );
}

export default App;
