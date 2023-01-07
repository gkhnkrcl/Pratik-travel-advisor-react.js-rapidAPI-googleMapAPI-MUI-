import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "../components/header/Header";
import List from "../components/list/List";
import Map from "../components/map/Map";
 import { getPlacesData } from "./index";


const App = () => {


  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked]=useState({}); 
  const [isLoading,setisLoading]=useState(false)
  const[type,setType]=useState('restaurants');


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  },[]);

  useEffect(() => {
    if(bounds.sw && bounds.ne){
    setisLoading(true);
    getPlacesData(type,bounds.sw, bounds.ne)
    .then((data)=>{
      setPlaces(data?.filter((place)=>place.name && place.num_reviews>0));
      setisLoading(false)
    })}
  }, [type, bounds]);
  
  return (
    <>
      <CssBaseline ></CssBaseline >
      <Header setCoordinates={setCoordinates}></Header>
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List  places={places} childClick={childClicked} isloading={isLoading}
          type={type}
          setType={setType}
     
          />
          

        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
             places={places}
             setchild={setChildClicked}
          ></Map>
        </Grid>
      </Grid>
      
   
      
    </>
  );
};

export default App;
