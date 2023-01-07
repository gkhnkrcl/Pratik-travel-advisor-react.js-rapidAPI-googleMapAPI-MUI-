import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyle from "./Style";

const Header = ({setCoordinates}) => {
  const classes = useStyle();
  const [autoComplete, setAutoComplete]=useState({});
  const onLoad=(autoC)=> setAutoComplete(autoC)

  const onPlaceChanged=()=>{
    const lat=autoComplete.getPlace().geometry.location.lat();
    const lng=autoComplete.getPlace().geometry.location.lng();
    
  setCoordinates({lat,lng})

  }

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h4" className={classes.title}>
          Travel Advisor
        </Typography>
    
        <Box className={classes.box}>
        <Typography variant="h6" className={classes.title}>
            explore new places
          </Typography>
          <Autocomplete  onLoad={onLoad} onPlaceChanged={onPlaceChanged}> 
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon></SearchIcon>
            </div>
            <InputBase
              placeholder="Search..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            ></InputBase>
          </div>
         </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
