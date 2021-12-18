import React, { useEffect } from 'react'

import homePhoto from '../images/homeAyat.png'

import { useSelector } from 'react-redux'
import LoadIcon from '../images/loading.gif'
import BioSearch from '../components/home/BioSearch'
import { Link } from 'react-router-dom';
import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core';


let scroll = 0;

const useStyles = makeStyles((theme)=>({
    tab: {
      backgroundColor:'#263238',
      color:'#FFFFFF',
     
    
      '&:hover': {
        backgroundColor:'#263238',
        color:'#FFFFFF',
       
      
    },
     
  },
    
    
  
  
   
  }));

const Home = () => {
    const classes = useStyles();
    const firstLogin = localStorage.getItem('firstLogin')

    window.addEventListener('scroll', () => {
        if(window.location.pathname === '/'){
            scroll = window.pageYOffset
            return scroll;
        }
    })

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({top: scroll, behavior: 'smooth'})
        }, 100)
    },[])

    return (
        <div className="home d-flex justify-content-center">
          <div className='col my-0 my-md-5 my-lg-5'>
          <div className='row'>

          
             
              <div className="col-md-4 order-2 mt-5 mt-md-4 mt-lg-4 order-md-1 order-lg-1">
                 
             
            <BioSearch/>
             
            
              
              
            
        </div>
        <div className='col-md-8 order-1 order-md-2 order-lg-2'>
          <img src ={homePhoto} className="img-fluid"/>
                
             </div>
             
              </div>
              <div className='row'>
                <div className='col-md-12'>
              <Grid 
              container
              alignItems="center"
              justifyContent="center"
              style={{marginTop:'50px'}}>
              <Link style={{ textDecoration: 'none', }} to={firstLogin? "/edit_biodata" : "/auth"}>
              <Paper elevation={24}>
              <Button variant="contained" fullWidth style={{minWidth:"300px"}} className={classes.tab}
            >
             <Typography variant="h5"> আপনার বায়োডাটা তৈরি করুন</Typography>
            </Button>
            </Paper>
              </Link>
              </Grid>
                </div>
              </div>
              </div>
        </div>
    )
}

export default Home
