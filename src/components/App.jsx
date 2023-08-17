import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactForm from "./ContactForm/ContactForm";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Layout from "./Layout/Layout";
import Header from "./Header/Header";

export const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/contacts' element={<Layout/>}>
          <Route index element={<ContactForm/>}/>
        </Route>
      </Routes>
    </div>
  );
};
