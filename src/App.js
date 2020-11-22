import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Home from './Components/Home/Home';
import Sidebar from './Components/Menu/Sidebar/Sidebar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import Blogs from './Components/Blogs/Blogs';
import DownloadCV from './Components/DownloadCV/DownloadCV';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Logo from './Components/Logo/Logo';
import { AnimatePresence } from 'framer-motion';
import Topbar from './Components/Menu/Topbar/Topbar';


function App() {
  return (
    <div className='root-container'>
      <BrowserRouter>
        <DownloadCV />
        <Sidebar />
        <Topbar />
        <Logo />
        <AnimatePresence>
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route path='/contact'><Contact /></Route>
            <Route path='/portfolio'><Portfolio /></Route>
            <Route path='/blogs'><Blogs /></Route>
            <Route path='/about'><About /></Route>
            <Route path='*'><NotFound /></Route>
          </Switch>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

export default App;
