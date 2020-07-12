import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'; 
import 'jquery';
import 'popper.js';
import 'bootstrap';
import './App.css';

import Home from './view/home'
import Navbar from './components/navbar';
import Footer from './components/footer';
import About from './view/about';
import Services from './view/services';
import Product from './view/products';



const Layout = () => {

    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Nosotros" component={About} />
                    <Route exact path="/Servicios" component={Services} />
                    <Route exact path="/Productos/:id" component={Product}  />
                </Switch>
                <Footer />

            </BrowserRouter>
        </>

    )
}
export default Layout;