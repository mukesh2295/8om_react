import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Home from './Header/Home';
import OurProducts from './Header/OurProducts';
import OurClients from './Header/OurClients';
import AboutUs from './Header/AboutUs';
import Footer from './Header/Footer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
             <section>
              <Header/>
             </section>
           {/* <div>
            <Route exact path = "/" component = {Home}/>
            <Route path = "/products" component = {OurProducts}/>
            <Route path = "/clients" component = {OurClients}/>
            <Route path = "/AboutUs" component = {AboutUs}/>
            <Route path = "/Footer" component = {Footer}/>

          </div> */ }
              <section>
              <Home/>
              </section>

              <section>
              <OurProducts/>
              </section>

              <section>
              <OurClients/>
              </section>

              <section>
              <AboutUs/>
              </section>

              <section>
              <Footer/>
              </section>
        </div>

      </Router>

    );
  }
}

export default App;
