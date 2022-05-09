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
  

const CreateBioBtn = () => {

    
    const classes = useStyles();
    const firstLogin = localStorage.getItem('firstLogin')
     
    return (
        <div>
    <Link style={{ textDecoration: 'none', }} to={firstLogin? "/edit_biodata" : "/register"}>
     <Card className={classes.BioSearchBox}  elevation={3}>
        
      
      
     
     

     
      <div className="container-fluid" >
     
         <div className='row mx-3 my-4'>
             <Grid container spacing={2}>
                
             <Grid item xs ={12} md={12}>
             <Typography variant='h6' align="center">আপনার বায়োডাটা তৈরি করুন</Typography>
            </Grid>
            
             
        
             
            
             
        </Grid>
        </div>
        
         
     </div>
     
      
        
        
        
       
     </Card>
         
     </Link>
      
      </div>
    )
}

export default CreateBioBtn
