import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import Login from '../Pages/Auth/Login/index';
import Header from '../Layout/Header';
import Register from '../Pages/Auth/Register';
import DashboardLayout from "../Pages/Panel/Layout/index";
import Overview from "../Pages/Panel/Overview/index";
import AdminSidebar from '../Pages/Panel/Layout/AdminSidebar';
import Dashboard from '../Pages/Panel/DashBoard';
import Booking from '../Pages/Panel/Booking';

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />} />
      </Route>

      {/* <Route path="/dashboard" element={<DashboardLayout />}>
          <Route exact path="overview" element={<Overview />} />
      </Route> */}
      
      <Route path='/dashboard' element={<AdminSidebar />}>
         <Route index element={<Dashboard />} />
         <Route path="/dashboard/booking" element={<Booking />} />
      </Route>
      
    </Routes>
  );
}

export default AllRoutes;
