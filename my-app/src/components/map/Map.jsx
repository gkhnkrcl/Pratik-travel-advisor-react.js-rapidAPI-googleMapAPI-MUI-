import React from 'react'
import GoogleMapReact from 'google-map-react'
import {Paper, Typography, useMediaQuery} from '@material-ui/core'
import LocationOnOutLinedIcon from '@material-ui/icons/LocationOnOutlined'
import useStyle from "./Style";


const Map = ({setCoordinates,setBounds,coordinates,places,setchild}) => {
  const classes=useStyle();
  const isDesktop= useMediaQuery('(min-width:600px)')
  
  console.log(places)

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
       bootstrapURLKeys={{key:'AIzaSyCglrzEbBzJzh_qHpU_aZCxPkhqfgahtmQ'}}
       defaultCenter={coordinates}
       center={coordinates}
       defaultZoom={14}
       margin={[50,50,50,50]}
      options={''}
      onChange={(e)=>{
           
        
        setCoordinates({lat:e.center.lat, lng:e.center.lng})
        setBounds({ne:e.marginBounds.ne, sw : e.marginBounds.sw})
      }}
      onChildClick={(child)=>{setchild(child)}}

      >
      
      {places?.map((place, i) => (
      
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!isDesktop ? (<LocationOnOutLinedIcon color="primary"fontSize="large"></LocationOnOutLinedIcon>) : (<Paper elevation={3} 
             className={`${classes.paper} ${classes.pointer}`}
                >
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  
                >
                  {place.name}
                </Typography>
                 <img
                 
                  src={
                    place.photo? place.photo.images.large.url:"https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                  alt={place.name}
                ></img> 
              </Paper>
            )}
            
          </div>
          
        ))}

      </GoogleMapReact>
    

    </div>
    
    
  )

}

export default Map