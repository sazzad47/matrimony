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
    minWidth:'100%',
    minHeight:'50px'
    
},
  
     
  
    
    
  
  
   
  }));

const Dashboard = () => {
    const classes = useStyles();
   
   

    

   

    return (
      <>
      <Helmet>
          <title>Dashboard</title>
          <meta
           name="description"
           content="দুনিয়া থেকে জান্নাতে যাওয়ার এ-আঁকা বাঁকা কণ্টকাকীর্ণ পথটা পাড়ি দেয়ার জন্য এমন একজন সাথী প্রয়োজন, যাকে দেখলে আল্লাহর কথা মনে পড়ে, যার কথা শুনলে..."  
           
           />
           <meta name='keywords' content='বিয়ে পাত্র পাত্রী বায়োডাটা বিয়ের সুন্নাহ দ্বীনদার পাত্র পাত্রী মোহর স্বামী স্ত্রী'/>
      </Helmet>
        <div className="home d-flex justify-content-center">
        
              <Grid style={{maxWidth:'500px', margin:'30px 5px'}} container spacing={2}>
                 <Grid item xs={12}>
                 <AdminSearch/>
                 </Grid>
                 <Grid item xs={12}>
                 <div className='mb-'>

                <Link style={{ textDecoration: 'none', }} to="/pending">
                          <Card className={classes.BioSearchBox}  elevation={3}>
                    <div className="container-fluid" >
                         <div className='row mx-3 my-4'>
                       <Grid container spacing={2}>
                   <Grid item xs ={12} md={12}>
<                        Typography variant='h6' align="center">Pending approval</Typography>
                         </Grid>
                       </Grid>
                         </div>
                        </div>
                             </Card>
                        </Link>
                          </div>
                 </Grid>
                 <Grid item xs={12}>
                 <div className='mb-'>

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
                 </Grid>
                 <Grid item xs={12}>
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
                 </Grid>
                 <Grid item xs={12}>
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
                 </Grid>

              </Grid>
        </div>
        </>
    )
}

export default Dashboard
