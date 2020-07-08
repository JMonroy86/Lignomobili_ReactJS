import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'font-awesome/css/font-awesome.min.css'; // 4.x
import '@fortawesome/fontawesome-free/css/all.css'; // 5.x
// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';
import './App.css';

import Home from './view/home'
// import Episode from './view/episode'
// import Characters from './view/characters'
// import Location from './view/location'
import Navbar from './components/navbar';
import Footer from './components/footer';
// import Login from './view/login';
// import Char from './view/char';
// import Notfound from './view/notfound';
// import MasterRoute from './layouts/master_layout'


const Layout = () => {

    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
                <Footer />

            </BrowserRouter>
        </>

    )
}
export default Layout;