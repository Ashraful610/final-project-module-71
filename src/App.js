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
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';

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
           </RequirthAuth>}>
         </Route>
         <Route path="/dashboard" element={
           <RequirthAuth>
                 <Dashboard></Dashboard>
           </RequirthAuth>}>
             <Route index element={<MyAppointment></MyAppointment>}></Route>
             <Route path='review' element={<MyReview></MyReview>}></Route>
             <Route path='history' element={<MyHistory></MyHistory>}></Route>
             <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
         </Route>
         <Route path="/reviews" element={<Reviews></Reviews>}></Route>
         <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
         <Route path="/login" element={<Login></Login>}></Route>
         <Route path="/signup" element={<SignUp/>}></Route>
       </Routes>
       <ToastContainer />
    </div>
  );
}

export default App;
