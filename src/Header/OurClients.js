import React, { Component } from 'react';
import classes from './OurClients.css';
import { Container, Row, Col } from 'react-grid-system';
class OurClients extends Component {
  render() {
    return (
      	<div className="OurClients">
	      	<div className = "Client_wrapper_top">
		        <h2 style = {{color :'#202020'}}> Our Clients Around The World</h2>
		        <h5 style = {{color :'#585858'}}> Duis auto cure dollar represndent in official desrum molit anim id velt esse </h5>
		        <h5 style = {{color :'#585858'}}>cilium dolore eu fugiat nulla pariature </h5>
	      	</div> 


	      	<div className = "client_grid">
		        
		        <Container style={{padding: '220px 50px !important , marginRight: 150px'}}>

  				<Row >
		        
			        <Col  className = " client_column"><img src = "https://image.freepik.com/free-vector/modern-logotype-collection_23-2147718650.jpg" style = {{height :'20' , weight :'80'}} /></Col>
		            <Col  className = " client_column"><img src = "https://image.freepik.com/free-vector/modern-logotype-collection_23-2147718650.jpg" style = {{height :'90' , weight :'80'}} /> </Col>
		            <Col  className = " client_column"><img src = "https://image.freepik.com/free-vector/modern-logotype-collection_23-2147718650.jpg" style = {{height :'90' , weight :'80'}} /></Col>
		            <Col  className = " client_column"><img src = "https://image.freepik.com/free-vector/modern-logotype-collection_23-2147718650.jpg" style = {{height :'90' , weight :'80'}} /></Col>
		            <Col  className = " client_column"><img src = "https://image.freepik.com/free-vector/modern-logotype-collection_23-2147718650.jpg" style = {{height :'90' , weight :'80'}} /></Col>
		          
		         </Row>
		          <br/>
		          <br/>
		          <br/>
		          <br/>  
		         <Row>
		            <Col  className = " client_column"><img src = "https://image.freepik.com/free-vector/modern-logotype-collection_23-2147718650.jpg" style = {{height :'90' , weight :'80'}} /></Col>
		            <Col  className = " client_column"><img src = "https://image.freepik.com/free-vector/modern-logotype-collection_23-2147718650.jpg" style = {{height :'90' , weight :'80'}} /> </Col>
		            <Col  className = " client_column"><img src = "https://image.freepik.com/free-vector/modern-logotype-collection_23-2147718650.jpg" style = {{height :'90' , weight :'80'}} /></Col>
		            <Col  className = " client_column"><img src = "https://image.freepik.com/free-vector/modern-logotype-collection_23-2147718650.jpg" style = {{height :'90' , weight :'80'}} /></Col>
		            <Col  className = " client_column"><img src = "https://image.freepik.com/free-vector/modern-logotype-collection_23-2147718650.jpg" style = {{height :'90' , weight :'80'}} /></Col>
		         </Row>

		        </Container>
	        </div>  
        
      	</div>
    );
  }
}

export default OurClients;