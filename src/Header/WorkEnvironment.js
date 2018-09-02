import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import { Container, Row, Col } from 'react-grid-system';
import Slider from "react-slick";
import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css";
class WorkEnvironment extends Component {
	
  render() {
  	const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      rows: 2,
      slidesPerRow: 2
    };

  	//<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
	//<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    return (
      <div className="WorkEnvironment">

       {/* <Container className = "container">
			 <Row>
                <Col sm={3}><img src = "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&h=300&w=250"/></Col>
	            <Col sm={3}><img src = " https://images.pexels.com/photos/167773/pexels-photo-167773.jpeg?auto=compress&cs=tinysrgb&h=300&w=250"/></Col>
	            <Col sm={3}><img src = "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&h=300&w=250"/></Col>
			    <Col sm={3}><img src = "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&h=300&w=250"/></Col>
	        </Row>
			<Row>
				<Col sm={3}><img src = "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&h=300&w=250"/> </Col>
				<Col sm={3}><img src = " https://images.pexels.com/photos/167773/pexels-photo-167773.jpeg?auto=compress&cs=tinysrgb&h=300&w=250"/></Col>
				<Col sm={3}><img src = "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&h=300&w=250"/></Col>
				<Col sm={3}><img src = " https://images.pexels.com/photos/167773/pexels-photo-167773.jpeg?auto=compress&cs=tinysrgb&h=300&w=250"/></Col>
			</Row>
	    </Container> */}

      <Slider {...settings}>
      <div>
      	<img src = "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&h=300&w=250"/>
      </div>

       <div>
      <img src = " https://images.pexels.com/photos/167773/pexels-photo-167773.jpeg?auto=compress&cs=tinysrgb&h=300&w=250"/>
      </div>

      <div>
      	<img src = "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&h=300&w=250"/>
      </div>

       <div>
      <img src = " https://images.pexels.com/photos/167773/pexels-photo-167773.jpeg?auto=compress&cs=tinysrgb&h=300&w=250"/>
      </div>

      <div>
      	<img src = "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&h=300&w=250"/>
      </div>

       <div>
      <img src = " https://images.pexels.com/photos/167773/pexels-photo-167773.jpeg?auto=compress&cs=tinysrgb&h=300&w=250"/>
      </div>

      <div>
      	<img src = "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&h=300&w=250"/>
      </div>

       <div>
      <img src = " https://images.pexels.com/photos/167773/pexels-photo-167773.jpeg?auto=compress&cs=tinysrgb&h=300&w=250"/>
      </div>

      <div>
      	<img src = "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&h=300&w=250"/>
      </div>

      <div>
      <img src = " https://images.pexels.com/photos/167773/pexels-photo-167773.jpeg?auto=compress&cs=tinysrgb&h=300&w=250"/>
      </div>

      </Slider>
      </div>
    );
  }
}

export default WorkEnvironment;