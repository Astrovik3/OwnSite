import React from "react";
import { Grid } from "@mui/material";

import TopBar from '../components/TopBar';
//import SideBar from '../components/SideBar';
import Presentation from '../components/Presentation';
//import Projects from '../components/Projects';
//import Technologies from '../components/Technologies';


const Home = () => {

  
  

  return(
    <Grid className="App">
      
      <TopBar message={'<<< site under construction >>>'} />

      <Presentation />
      

      <Grid className="third" id='projects'>
        <Grid className="thirdSub1">
          <Grid className="thirdItem">
            
          </Grid>
          <Grid className="thirdItem">

          </Grid>
          <Grid className="thirdItem">

          </Grid>
        </Grid>
      </Grid>
      
      
      <Grid className="second" id='technologies'>
        <Grid className="secondSub">
          <Grid className="secondItem1">
            
          </Grid>
          <Grid className="secondItem2">

          </Grid>
          <Grid className="secondItem3">

          </Grid>
        </Grid>
        <p className="secondText"> TECHNOLOGIES TECHNOLOGIES TECHNOLOGIES </p>
      </Grid>


      <Grid className="fourth" id='contact'>
        <Grid className="fourthSub1">
          <Grid className="fourthItem1">
            
          </Grid>
          <Grid className="fourthItem2">

          </Grid>
          <Grid className="fourthItem3">

          </Grid>
        </Grid>
        <p className="fourthText"> CONTACT CONTACT CONTACT </p>
      </Grid>


    </Grid>
  );

};
export default Home;
