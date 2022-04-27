import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { Box, Button, Card, Typography, Grid, InputLabel, makeStyles, Paper, Select, TextField } from '@material-ui/core'

import { useSelector, useDispatch } from 'react-redux'
import { pdivisions } from '../FormComponents/Data'
import searchPhoto from '../../images/searchPhoto.png'

import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import UserCard from '../UserCard'

import { getBiodatas, getBiodatasBySearch } from '../../redux/actions/getBiodatasAction'
const useStyles = makeStyles((theme)=>({
    BioSearchBox: {
      backgroundColor:'#880e4f',
      color:'	#FFFFFF'
      
},
    bioSearchButton:{
            backgroundColor:'#263238',
            color:'#FFFFFF',
            '&:hover': {
              backgroundColor: '#263238',
              color: '#FFFFFF',
            }
        }

   
  }));
  

const BioSearchByNumber = () => {
    
    const dispatch = useDispatch()
    const history = useHistory();
    
    const classes = useStyles();
    const initState = {
     gender:'',status:'',pdivision:"", 
  }
  const [userData, setUserData] = useState(initState)
  const { gender,status,pdivision, } = userData
    
    
 
  
 
    

      const handleInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]:value })
    }
    
   
   
   
    

    const handleSearch = async (e) => {
        e.preventDefault()
        

        try {
            if (gender==='none' && status==='none' && pdivision==='none' ) {
                  dispatch(getBiodatas())
                  history.push('/biodatas')
            } else {

              dispatch(getBiodatasBySearch(userData));
                history.push('/biodatas')
            }
          
           
        } catch (err) {
            dispatch({
                type: GLOBALTYPES.ALERT, payload: {error: err.response.data.msg}
            })
        }
    }
    

   
    return (
        <div>
     <Card className={classes.BioSearchBox}  elevation={3}>
        <form onSubmit={handleSearch}>
      
      
     
     

     
      <div className="container-fluid" >
     
         <div className='row mx-3 my-4'>
             <Grid container spacing={2}>
                
             <Grid item xs ={5} md={5}>
             <Typography align="right">বায়োডাটা নং</Typography>
            </Grid>
            
             <Grid item xs ={7} md={7}>
             <TextField
             className='bioSearchSelect'
              
              id="pdivision"
              name="pdivision"
              value={pdivision}
              onChange={handleInput} >
              
              
              
              
             </TextField>
            </Grid>
        
             
            
             <Grid item  xs ={5} md={5} lg={5}>
         
      
        </Grid>
             <Grid item  xs ={7} md={7} lg={7}>
         <Button disableRipple type="submit" variant="contained" fullWidth className={classes.bioSearchButton}>বায়োডাটা খুঁজুন</Button>
      
        </Grid>
        </Grid>
        </div>
        
         
     </div>
     
      
        
        
        
        </form>
     </Card>
         
     
      
      </div>
    )
}

export default BioSearchByNumber
