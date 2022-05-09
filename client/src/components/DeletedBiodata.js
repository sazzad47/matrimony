import React, { useEffect } from 'react'
import { logout } from '../redux/actions/authAction'
import {useDispatch } from 'react-redux'
import  {Grid, makeStyles,Typography, Card } from '@material-ui/core';

import { Link } from 'react-router-dom';
import ButtonContainer from './profile/ButtonContainer';
import FollowBtn from './FollowBtn';


let scroll = 0;

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
const DeletedBiodata = () => {
    const classes = useStyles();
   

    const dispatch = useDispatch()

   

    return (
      <>
      
        <div style={{minHeight:'100vh'}} className="justify-content-center">
          <div className='col my-0 my-md-5 my-lg-5'>
        
              <div className='row'>
                <div className='col-md-12 d-flex justify-content-center align-items-center'>
              
              <div style={{minWidth:'400px'}} className='mt-5'>

             <Typography variant='h6'>আপনার বায়োডাটা ওয়েবসাইট থেকে ডিলিট করা হয়েছে।</Typography>
                </div>
            
                </div>
                <div className='col-md-12 d-flex justify-content-center align-items-center'>
              
              <div style={{minWidth:'200px'}} className='mt-5'>

              <div>
    <Link style={{ textDecoration: 'none', }} to ="/">
     <Card className={classes.BioSearchBox}  elevation={3} 
      onClick={() => {
       
        dispatch(logout());}}
     >
        
      
      
     
     

     
      <div className="container-fluid" >
     
         <div className='row mx-3 my-4'>
             <Grid container spacing={2}>
                
             <Grid item xs ={12} md={12}>
             <Typography variant='h6' align="center">Log out</Typography>
            </Grid>
            
             
        
             
            
             
        </Grid>
    
        </div>
        
         
     </div>
     
      
        
        
        
       
     </Card>
         
     </Link>
      
      </div>
                </div>
            
                </div>
              </div>
              
              </div>
        </div>
        </>
    )
}

export default DeletedBiodata
