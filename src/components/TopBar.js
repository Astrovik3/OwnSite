import React from "react";
import { Grid } from "@mui/material";



const TopBar = ({message}) => {


  return(
    <Grid className="topBar">
      <p className="topMessage"> {message} </p>

    </Grid>
  );

}
export default TopBar;

