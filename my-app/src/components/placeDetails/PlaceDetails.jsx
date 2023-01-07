import React from 'react'
import {Box, Typography,Button,Card,CardMedia,CardContent,CardActions,Paper} from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone'
import useStyle from "./Style";


const PlaceDetails = ({place, selected,refProp}) => {
  
  if(selected) refProp?.current?.scrollIntoView({behavior:"smooth", block:"start"})

  const classes=useStyle();

  return (
    <>
    <Card elevation={6}>
     <CardMedia 
    style={{height:350}}
    image={ place.photo?place.photo.images.large.url:'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
    title={place.name} 
    
    > </CardMedia>
    <CardContent>
    <Box>
    <Typography gutterBottom variant='h5' className={classes.placename}> <Paper> {place.name}</Paper> </Typography>
    <Typography>Address:</Typography> 
    <Typography gutterBottom variant="body2" className={classes.subtitle}>{place.address}</Typography> 
    </Box>


      <Box display="flex" justifyContent='space-between'>
        <Typography variant="subtitle1">Distance:</Typography>
        <Typography  gutterBottom variant="subtitle1">{place.distance_string}</Typography>
        </Box>
      <Box display="flex" justifyContent='space-between'>
        <Typography variant="subtitle1"><PhoneIcon></PhoneIcon></Typography>
        <Typography  gutterBottom variant="subtitle1">{place.phone}</Typography>
      </Box>
      <CardActions>
        <Button size='small'  onClick={()=>window.open(place.web_url, '_blank')}>
          Trip Advisor
        </Button>
        <Button size='small'  onClick={()=>window.open(place.website, '_blank')}>
          Website
        </Button>
    
      </CardActions>
    </CardContent>


    </Card>
  

  

     </>
  )
}

export default PlaceDetails