import React, { useState } from "react";
import { Grid } from "@mui/material";
import { useTransition, animated } from "react-spring";

import TopBar from '../components/TopBar';


const Home = () => {

  const [clickPhoto, setClickPhoto] = useState(false);

  const photoClicked = () => {
    if (clickPhoto) {
      setClickPhoto(false);
    }else {
      setClickPhoto(true);
    }
  };

  const transition = useTransition(clickPhoto, {
    from: {x: 100, y: 0, opacity: 0},
    enter: {x: 0, y: 0, opacity: 1},
    leave: {x: 100, y: 0, opacity: 0}
  });

  return(
    <Grid className="App">
      
      <TopBar message={'<<< site under construction >>>'} />

      <Grid className="first" id='about'>
        <Grid className="firstSub1">

          {transition((style, item) => 
            item ? 
              <animated.div style={style} className="firstMoreInfo">
                <p className="firstIntro"> Introduction </p>
              </animated.div>
            : null)}

          <div className="firstPhoto" onClick={photoClicked}>

          </div>
          <Grid className="firstInfo">
            <p className="firstText"> #JUAN TOMAZ </p>
            <p className="firstSubtext">Frontend Developer</p>
          </Grid>
        </Grid>
        <Grid className="firstSub2">
          <p className="firstTextMenu"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
            <a className="firstAbout" href="#about"> about</a> mauris cursus mattis molestie a iaculis at. Urna neque viverra justo nec ultrices. Ultrices dui sapien eget mi. 
            Odio euismod lacinia at quis risus sed vulputate odio ut. Quam elementum pulvinar etiam non. 
            Pulvinar pellentesque habitant morbi tristique senectus. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. 
            Leo in vitae turpis massa <a className="firstAbout" href="#technologies"> technologies</a> sed tempus. Nisl nisi scelerisque eu ultrices. Risus at ultrices mi tempus imperdiet. 
            Orci eu lobortis elementum nibh tellus molestie nunc. Eleifend quam adipiscing vitae proin sagittis <a className="firstAbout" href="#projects"> projects</a> rhoncus. 
            Mattis vulputate enim nulla aliquet. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. 
            In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Ac turpis egestas integer eget aliquet nibh praesent. 
            Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Senectus et netus et malesuada fames ac. 
            Molestie at elementum eu facilisis sed. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Felis donec et odio pellentesque diam. 
            Et <a className="firstAbout" href="#contact"> contact</a> ac feugiat sed lectus vestibulum mattis. Augue lacus viverra vitae congue eu consequat. 
            Erat velit scelerisque in dictum non consectetur a. Id ornare arcu odio ut sem nulla. Accumsan sit amet nulla facilisi. 
            Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. At risus viverra adipiscing at in tellus integer. 
            Feugiat sed lectus vestibulum mattis ullamcorper. Adipiscing elit pellentesque habitant morbi tristique. 
            In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Senectus et netus et malesuada fames ac.
            Odio euismod lacinia at quis risus sed vulputate odio ut. Quam elementum pulvinar etiam non. 
            Pulvinar pellentesque habitant morbi tristique senectus. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue.
          </p>
        </Grid>
      </Grid>
      

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
