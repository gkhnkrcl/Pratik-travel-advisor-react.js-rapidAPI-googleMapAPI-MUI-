import React, {createRef, useEffect, useState} from 'react'
import{CircularProgress, Grid,Typography,InputLabel,MenuItem,FormControl,Select,Paper} from '@material-ui/core'
import useStyle from "./Style";
import PlaceDetails from '../placeDetails/PlaceDetails';



const List = ({places, childClick, isloading,type,setType}) => {
  const classes=useStyle();

  const [elRefs,setElRefs]=useState([]);
  useEffect(()=>{
    setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);


  return (
    <div className={classes.container}>
    <Typography variant="h6" align='center' className={classes.listTitle}>
      <Paper> Restaurants & Attractions</Paper></Typography>
    {isloading?(
      <div className={classes.loading}>
        <CircularProgress size="5rem"/>
        </div>
    ):(
      <>
        <FormControl className={classes.formControl}>
            <InputLabel id="type">Type</InputLabel>
            <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
          

            </Select>
          </FormControl>
 
    <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} key={i}  item xs={12}>
                <PlaceDetails 
                 selected={Number(childClick)===i}
                 refProp={elRefs[i]}
                 place={place}
           
                />
              
              </Grid>
            ))}
          </Grid>
          </>
    )}
          
    
    </div>
  )
}

export default List