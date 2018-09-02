import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import classes from './Footer.css';
import brand from './brand.svg';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
       <div className = "Footer_top ">
        <Container>
          <Row>
            <Col sm={3} >
                <img  className = "brand_logo" src = {brand}  alt = "8OM"/>
            </Col>
            <Col sm={3}>
              <h6 style={{color:'white'}}>ADDRESS</h6> 
              <h6>3rd Floor, 24 Rajlok Building,</h6>
              <h6> Nehru Place, Delhi 110019</h6>
            </Col>
            <Col sm={3}>
              <h6 style={{color:'white'}} >HELP</h6>
              <h6>Email - info@8om.io</h6>
              <h6>Contact - +91 9899901974</h6>
            </Col>
            <Col sm={3}>
            <br/>
            <br/>
            <br/>
            <button type="button" class="Contact_button">Contact Us</button>
            </Col>
          </Row>

          <Row>
            <Col >
                  <h6 style={{color:'white'}}> PAGES </h6>
                  <h6> SERVICES</h6>
                  <h6>CLIENTS</h6>
                  <h6>ABOUT US</h6>
                  <h6>CAREER</h6>
                  <h6>BLOG</h6>
            </Col>
            <Col >
                  <h6 style={{color:'white'}}>SERVICES</h6>
                  <h6>DATA MINING</h6>
                  <h6>DEVELOPMENT</h6>
                  <h6>DIGITAL MARKETING</h6>
                  <h6>USER EXPERIENCE</h6>
                  <h6>CUSTPM SOLUTIONS</h6>
                  <h6>INVENTION MANAGEMNET</h6>
            </Col>
            <Col >
                  <h6 style={{color:'white'}}>SOLUTIONS</h6>
                  <h6>TRCKR</h6>
                  <h6>EXTRACT</h6>
                  <h6>BOOKS</h6>
                  <h6></h6>
                  <h6></h6>
                  <h6></h6>
            </Col>
            <Col >
                  <h6 style={{color:'white'}}>INDUSTRIES</h6>
                  <h6>ECOMMERE</h6>
                  <h6>RETAIL</h6>
                  <h6>GET SUPPORT</h6>
                  <h6>CONTACT US</h6>
                  <h6></h6>
                  <h6></h6>
            </Col>
            <Col>
                  <h6 style={{color:'white'}}>CONTACT</h6>
                  <h6>GET SUPPORT</h6>
                  <h6>CONTACT US</h6>
                  <h6>SOCIALS</h6>
                  <h6></h6>
                  <h6></h6>
                  <h6></h6>
            </Col>

          </Row>
          <Row>
            <Col sm={4}>
                  <h6 style = {{marginLeft: '30px' }}>2018 8om All rights reserved</h6>
            </Col>
            <Col sm={4}>
                  <h6 style = {{marginLeft: '90px', marginRight: '0px'}}>PRIVACY POLICY </h6>
              </Col>
              <Col sm={4}>
                  <h6 style = {{marginLeft: '90px'}}>TERMS OF SERVICES</h6>
            </Col>
          </Row>

         </Container> 
       </div>
        
      </div>
    );
  }
}

export default Footer;