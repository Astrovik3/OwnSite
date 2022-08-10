import React from "react";
import { Grid } from "@mui/material";

import TopBar from '../components/TopBar';


const Home = () => {


  return(
    <Grid className="App">
      
      <TopBar message={'... sitio en construcción ...'} />
        <p style={{color: "white"}}>
          App.js has been edited.
        </p>
        <a
          className="App-link"
          href="https://github.com/Astrovik3"
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB
        </a>
    </Grid>
  );

};
export default Home;
