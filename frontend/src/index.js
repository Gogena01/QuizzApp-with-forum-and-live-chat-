import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import './index.css';
//import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import ButtonJs from './navbar/navbar';
import Home from './pages/home';
import Exercise1 from './exercise1/exercise1';
import reportWebVitals from './reportWebVitals';
import Cards from './card/card';
import NavMenu from './navbar/navbar';
import ParentComponent from './sidebarexperiment/sidebarTest';
import App from './App';
import Forum from './pages/forumSIdebar';
import Sidebar from './pages/forumSIdebar';
import Movies from './learning/propsTry';
import Result from './chat/Chat';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavMenu />}>
        <Route path='/' element={<Home />} />
        <Route path='exercise' element={<ParentComponent />} />
        <Route path='test' element={<App />} />
        <Route path='/forum' element={<Sidebar />} />
        <Route path='/tryOut' element={<Movies />} />
        <Route path='/chat' element={<Result />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
