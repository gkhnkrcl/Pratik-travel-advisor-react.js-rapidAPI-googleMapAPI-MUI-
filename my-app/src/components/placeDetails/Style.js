import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  chip: {
    margin: '5px 5px 5px 0',
  },
  subtitle: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px', textAlign:"justify",
  },
  spacing: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },

  placename:{
    fontFamily:'Raleway', textAlign:"center"
  }
}));