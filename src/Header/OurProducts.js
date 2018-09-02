import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import classes from './OurProducts.css';

class OurProducts extends Component {
  render() {
    return (
      <div className="OurProducts">
      	<div className = " Product_top">
	      	<h1 style={{color:'black' , textAlign: 'center' }} >Our Solutions </h1> 
	      	<h4 style={{color:'#585858' , textAlign: 'center' }} >Duis aute irure dolor in  reprehendent voluptate velit esse cilium dolore </h4>
        </div>

      <div className = "Product_Data_Extraction">
        <Container>
			<Row className = "Data_Extraction_Row">
			    <Col sm={6}>
			       <div className = "extraction_image">
          			 <img src = "https://image.freepik.com/free-psd/laptop-on-black-desk-mock-up_1022-104.jpg " height = "300" width = "450" />
      			   </div>
			    </Col>
			    <Col sm={6}>
			      <div className = "extraction_data">
          				<p style={{fontSize:'12px'}}>DATA EXTRACTION</p>
          				<p>EXTRACT</p>
          			</div>

          			<div className = "Data_extraction ">
          				<ul>
		  					<li>Web scraping automation and data feed extraction</li>
		  					<li>Deploy & Scale your web crawlers with ease </li>
		  					<li> Manage Crawling Services For All Kind Of Industries</li>
		  					<li>Get Combined With Data Feeds From Thousands Of Services</li>
						</ul> 
							<button type="button" className="btn btn-outline-secondary">Learn More</button>
          			</div>
			    </Col>
			    
		    </Row>

		    <Row className = "Inventary_Row">
		       	<Col sm={6}>
		       	  	<div className = "Inventary_data">
                    	<p style={{fontSize:'12px'}}>INVENTARY MANAGEMENT</p>
                    	<p>TRCKR</p>
                  	</div>

                  <div className = "Inventary_management ">
                    <ul>
                    	<li>Web scraping automation and data feed extraction</li>
                  		<li>Deploy & Scale your web crawlers with ease </li>
                  		<li>Manage Crawling Services For All Kind Of Industries</li>
                  		<li>Get Combined With Data Feeds From Thousands Of Services</li>
              		</ul> 
                		<button type="button" className = "btn btn-outline-secondary"> Learn More </button>
                  </div>  

                </Col>
                <Col sm={6}>
			        <div className = "Inventary_image">
          			 <img src = "  https://image.freepik.com/free-psd/laptop-on-black-desk-mock-up_1022-104.jpg " height = "300" width = "450" />
      			    </div>
			    </Col>
		    </Row>
		    <Row className = "Marketing_row">
		    	<Col sm={6}>
			        <div class = "Marketing_image">
          			 <img src = "  https://image.freepik.com/free-psd/laptop-on-black-desk-mock-up_1022-104.jpg " height = "300" width = "450" />
      			    </div>
			    </Col>
			    <Col sm={6}>
			     	<div className = "Marketing_data">
                    <p style={{fontSize:'12px'}}> BEST SERVICE</p>
                    <p style={{fontSize:'20px'}}> Marketing</p>
                  </div>
                  <div className = "Produt_Marketing">
                    <ul>
                  		<li>Web scraping automation and data feed extraction</li>
                  		<li>Deploy & Scale your web crawlers with ease </li>
                  		<li> Manage Crawling Services For All Kind Of Industries</li>
                  		<li>Get Combined With Data Feeds From Thousands Of Services</li>
              		</ul> 
                		<button type="button" className = "btn btn-outline-secondary">Learn More</button>
                  </div>
			    </Col>
		    </Row>
		</Container>
      </div>
    </div>
    );
  }
}

export default OurProducts;