import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CreateBiodata from './createBiodata'
import Publishbtn from '../components/FormComponents/Publishbtn'
import { updateProfileUser } from '../redux/actions/profileAction'
import { Link } from 'react-router-dom'
import { Button, Card, Grid, makeStyles, Typography } from '@material-ui/core'
import Rules from './../components/FormComponents/Rules';
import { Helmet } from 'react-helmet-async'

import DeletedBiodata from '../components/DeletedBiodata'

const useStyles = makeStyles((theme)=>({
    tab: {
      backgroundColor:'#3f50b5',
      color:'#FFFFFF',
      height:'35px',
    
      '&:hover': {
        backgroundColor: '#fff',
        color: '#000000',
        border:'1px solid #000000',
        height:'35px',
      
    },
     
  },
    
    
  
  
   
  }));


const EditProfile = () => {
    const classes = useStyles();
    

    const { auth, loading } = useSelector(state => state)
    const dispatch = useDispatch()
    
  
    
    
    

     
    

    

   

   
    return (
      <>
      <Helmet>
         <title>Edit Your Biodata</title>
         <meta name='description' content="Edit your boidata."/>
          <link rel='canonical' href='/edit_biodata'/>
      </Helmet>
        {auth.user.isPublished==="deleted"? <DeletedBiodata/> : <div className="biodatas_page">
         <div className="row">
             <div className="col-md-3"> 

            {/* something to add */}
             </div>
             <div className="col-md-6"> 
             <Card elevation={6} style={{marginBottom:'2rem',margin:'2rem 1rem'}}>
             
           <Rules/>
              </Card>
              <Grid style = {{ marginBottom:'0.1rem'}} spacing={10} container alignItems='center' justifyContent='center'>
                 <Grid  item xs={6} sm={6} md={6} lg={6}>
              <Card style={{margin:'0 1rem'}} elevation={6}>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to={`/biodatas/${auth.user._id}`}> <Button className={classes.tab} fullWidth > Preview </Button>
                    </Link>
                     </Card>
                     </Grid>
                     <Grid item xs={6} sm={6} md={6} lg={6}>
                <Card style={{margin:'0 1rem'}} elevation={6}>
                    <Publishbtn/>
                    </Card>
                    </Grid>
                     </Grid>
                     <Grid style={{margin:'0 1rem'}}>

            <CreateBiodata/>
                     </Grid>
           
                
      
             </div>
             <div className="col-md-3"> 

           {/* something to add */}
             </div>
            </div>
        </div>}
        </>
    )
}

export default EditProfile
