import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Button, Grid, makeStyles, Paper, Typography, Card } from '@material-ui/core';
import { Helmet } from 'react-helmet-async'
import AdminSearch from './AdminSearch';
import { Link } from 'react-router-dom';



let scroll = 0;

const useStyles = makeStyles((theme)=>({
  BioSearchBox: {
    backgroundColor:'#880e4f',
    color:'	#FFFFFF',
    minWidth:'400px',
    minHeight:'50px'
    
},
  
     
  
    
    
  
  
   
  }));

const Dashboard = () => {
    const classes = useStyles();
   
   

    

   

    return (
      <>
      <Helmet>
          <title>Home</title>
          <meta
           name="description"
           content="দুনিয়া থেকে জান্নাতে যাওয়ার এ-আঁকা বাঁকা কণ্টকাকীর্ণ পথটা পাড়ি দেয়ার জন্য এমন একজন সাথী প্রয়োজন, যাকে দেখলে আল্লাহর কথা মনে পড়ে, যার কথা শুনলে..."  
           
           />
           <meta name='keywords' content='বিয়ে পাত্র পাত্রী বায়োডাটা বিয়ের সুন্নাহ দ্বীনদার পাত্র পাত্রী মোহর স্বামী স্ত্রী'/>
      </Helmet>
        <div className="home d-flex justify-content-center">
          <div className='col my-0 my-md-5 my-lg-5'>
          <div className='row'>

          
             
              <div className="col-md-4 order-2 mt-5 mt-md-4 mt-lg-4 order-md-1 order-lg-1">
                 
            
             <div className='mb-4'>

             <Link style={{ textDecoration: 'none', }} to="/applicants">
     <Card className={classes.BioSearchBox}  elevation={3}>
        <div className="container-fluid" >
     <div className='row mx-3 my-4'>
             <Grid container spacing={2}>
                <Grid item xs ={12} md={12}>
             <Typography variant='h6' align="center">Applicants</Typography>
            </Grid>
            </Grid>
        </div>
        </div>
     </Card>
         </Link>
             </div>
             <div className='mb-5'>

             <Link style={{ textDecoration: 'none', }} to="/pending">
     <Card className={classes.BioSearchBox}  elevation={3}>
        <div className="container-fluid" >
     <div className='row mx-3 my-4'>
             <Grid container spacing={2}>
                <Grid item xs ={12} md={12}>
             <Typography variant='h6' align="center">Pending approval</Typography>
            </Grid>
            </Grid>
        </div>
        </div>
     </Card>
         </Link>
             </div>
             <div className='mt-5 pt-2 d-block d-md-none d-lg-none'>

             <Link style={{ textDecoration: 'none', }} to="/requests">
     <Card className={classes.BioSearchBox}  elevation={3}>
        <div className="container-fluid" >
     <div className='row mx-3 my-4'>
             <Grid container spacing={2}>
                <Grid item xs ={12} md={12}>
             <Typography variant='h6' align="center">Requests</Typography>
            </Grid>
            </Grid>
        </div>
        </div>
     </Card>
         </Link>
             </div>
            
               </div>
        <div className='col-md-8 order-1 order-md-2 order-lg-2'>
       
         <AdminSearch/>
             </div>
             
              </div>
              <div className='row'>
                <div className='col-md-12 d-flex justify-content-center justify-content-md-start justify-content-lg-start align-items-center'>
              
              <div style={{minWidth:'400px'}} className='mt-5 d-none d-md-block d-lg-block'>

              <Link style={{ textDecoration: 'none', }} to="/requests">
     <Card className={classes.BioSearchBox}  elevation={3}>
        <div className="container-fluid" >
     <div className='row mx-3 my-4'>
             <Grid container spacing={2}>
                <Grid item xs ={12} md={12}>
             <Typography variant='h6' align="center">Requests</Typography>
            </Grid>
            </Grid>
        </div>
        </div>
     </Card>
         </Link>
                </div>
            
                </div>
              </div>
              <div className='row mt-5'>
                <div className='col-md-12 d-block d-md-flex d-lg-flex justify-content-center justify-content-md-start justify-content-lg-start align-items-center'>
                <Link style={{ textDecoration: 'none', }} to="/reports">
     <Card className={classes.BioSearchBox}  elevation={3}>
        <div className="container-fluid" >
     <div className='row mx-3 my-4'>
             <Grid container spacing={2}>
                <Grid item xs ={12} md={12}>
             <Typography variant='h6' align="center">Reports</Typography>
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
        </>
    )
}

export default Dashboard
