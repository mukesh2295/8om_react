import React, { Component } from 'react';
import classes from './AboutUs.css';
import { Container, Row, Col } from 'react-grid-system';
import { Carousel } from 'react-responsive-carousel';
//import WorkEnvironmentImages from './WorkEnvironment';
class AboutUs extends Component {
  render() {
    return (
      <div className="AboutUs">
    	<div className = "Team_heading">
          <h1 style = {{ color :'##404040'}}>Our Team</h1>
          <h5 style = {{ color : '#585858'}}>We are constantly working on curating the best team suited to </h5>
          <h5 style = {{ color : '#585858'}}>deliver high performance across industries. Meet our enthusiast - </h5>
        </div>

        <div className = "Work_Flow">
        	<Container>
				<Row>
			   	 	<Col sm={6}>
		        		<div className = "work_flow_data">
			        		<p> BEST SERVICE</p>
			                <p> Our Work Flow</p>
			                <p> Loream ipsum dollar set amet consecrtator </p>
			                <p>adipsicising elit , sed do euismod tempor </p>
			                <p>inciduent ut labour et dolor magna aliqua. </p>
			                <p>Ut enim ad minim veniam ex ea commodo consequat</p> 
			                <button className ="workflow_button" > LEARN MORE </button>
		        		</div>
		        	</Col>

		        	<Col sm={6}>
			        	<div className = "Work_flow_image">
			          		<img src = "https://images.pexels.com/photos/1080865/pexels-photo-1080865.jpeg" width ="500" height="300" />
			        	</div>
		        	</Col>
		    	</Row>	
		  	</Container>
        </div>

        <div className = "Work-environment">
        	<div className = "Work-environment_top">
        		<h1 style = {{ color :'##404040' , textAlign: 'left' , marginLeft :'80px'}}> Our Work Environment</h1>
            	<h5 style = {{ color : '#585858' ,textAlign: 'left' , marginLeft : '80px'}}> Duis auto cure dollar represndent in official desrum molit anim id velt esse </h5>
            	<h5 style = {{ color : '#585858' ,textAlign: 'left' , marginLeft : '80px'}}>cilium dolore eu fugiat nulla pariature</h5>
        	</div>

            <div className = "work-environment_pictures ">
             {/*<Carousel showArrows={true} showThumbs={false} swipeable = {true}>
               <div> <WorkEnvironmentImages/></div>
               <div><WorkEnvironmentImages/></div>
               <div><WorkEnvironmentImages/> </div>
             </Carousel> */}
            {/* <WorkEnvironmentImages/> */}
    		</div>
    	</div>
    

        <div className = "try_8om ">
            <h1>Ready To Get Started ? </h1>
            <h6 style = {{ color : '#696969'}}> If you are interested in 8om services and would like additional information </h6>
            <button type="button" marginLeft = "200px" style = {{background: 'green' , color:'white',}}>Try Again </button>
        </div>


	  </div>
    );
  }
}

export default AboutUs;