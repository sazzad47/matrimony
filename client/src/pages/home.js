import React, { useEffect } from 'react'



import { useSelector } from 'react-redux'
import LoadIcon from '../images/loading.gif'
import BioSearch from '../components/home/BioSearch'
import { Link } from 'react-router-dom';
import { Button, Grid, Paper, Typography } from '@material-ui/core';


let scroll = 0;

const Home = () => {
    

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
        <div className="home row d-flex align-items-start align-items-lg-center justify-content-center">
            
              <div className="col-md-4 mx-3 mx-lg-0 ">
                 
              <div className="">
            <BioSearch/>
              </div>
            
              <Grid 
              container
              alignItems="center"
              justifyContent="center"
              style={{marginTop:'50px'}}>
              <Link to="/edit_biodata">
              <Paper elevation={24}>
              <Button variant="contained" style={{minWidth:"300px"}} color="secondary"
            >
             <Typography variant="h5"> আপনার বায়োডাটা তৈরি করুন</Typography>
            </Button>
            </Paper>
              </Link>
              </Grid>
              
            
        </div>
              
        </div>
    )
}

export default Home
