import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Card, Typography, Grid, makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    BioSearchBox: {
      backgroundColor:'#880e4f',
      color:'	#FFFFFF',
      '&:hover': {
        backgroundColor: 'hsl(320, 94%, 21%)',
        color: '#FFFFFF',
        outline:'none'
      }
      
},
    bioSearchField: {
      backgroundColor:'#263238',
            color:'#FFFFFF',
            '&:hover': {
              backgroundColor: '#263238',
              color: '#FFFFFF',
            },
            
      
     
      
},
    bioSearchButton:{
            backgroundColor:'hsl(320, 94%, 21%)',
            color:'#FFFFFF',
            '&:hover': {
              backgroundColor: 'hsl(320, 94%, 21%)',
              color: '#FFFFFF',
              outline:'none'
            },
            outline:'none'
        }

   
  }));
  

const HowToCreateBio = () => {

    
    const classes = useStyles();
    const firstLogin = localStorage.getItem('firstLogin')
     
    return (
        <div>
    <a href="https://youtu.be/dYLWVp_uk2c" style={{ textDecoration: 'none', }}>
     <Card className={classes.BioSearchBox}  elevation={3}>
        
      
      
     
     

     
      <div className="container-fluid" >
     
         <div className='row mx-3 my-4'>
             <Grid container spacing={2}>
                
             <Grid item xs ={12} md={12}>
             <Typography variant='h6' align="center">যেভাবে বায়োডাটা তৈরি করবেন</Typography>
            </Grid>
            
             
        
             
            
             
        </Grid>
        </div>
        
         
     </div>
     
      
        
        
        
       
     </Card>
         
     </a>
      
      </div>
    )
}

export default HowToCreateBio
