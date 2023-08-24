import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactForm from './ContactForm/ContactForm';
import Register from './Register/Register';
import Login from './Login/Login';
import Layout from './Layout/Layout';
import Header from './Header/Header';
import PublicGuard from 'guards/PublicGuard';
import PrivateGuard from 'guards/PrivateGuard';
import { refreshUserThunk } from 'store/user/operations';
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route
          path="/register"
          element={
            <PublicGuard>
              <Register />
            </PublicGuard>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <PublicGuard>
              <Login />
            </PublicGuard>
          }
        ></Route>
        <Route path="/contacts" element={<Layout />}>
          <Route
            index
            element={
              <PrivateGuard>
                <ContactForm />
              </PrivateGuard>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
