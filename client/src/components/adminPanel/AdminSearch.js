import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Button, Card, Typography, Grid,makeStyles} from '@material-ui/core'

import { useDispatch } from 'react-redux'


import { getBiodatasByAdmin } from '../../redux/actions/getBiodatasAction'
const convertToEnglishNumber = require('banglanumber-to-englishnumber');
const useStyles = makeStyles((theme)=>({
    BioSearchBox: {
      backgroundColor:'#880e4f',
      color:'	#FFFFFF'
      
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
  

const AdminSearch = () => {
    
    const dispatch = useDispatch()
    const history = useHistory();
    
    const classes = useStyles();
    const initState = {
     gender:'',status:'',pdivision:"", index:""
  }
  const [userData, setUserData] = useState(initState)
  const { index  } = userData
    
    
 
  
 
    

      const handleInput = e => {
        const englishNumber = convertToEnglishNumber(e.target.value);
        
        const { name } = e.target
        setUserData({ ...userData, [name]:englishNumber })
    }
    
   
   
   
    

    const handleSearch = async (e) => {
        e.preventDefault()
        dispatch(getBiodatasByAdmin(userData));
        history.push('/biodatas')
            
          
           
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
             <input
             className='bioSearchSelect'
              
              id="index"
              name="index"
              value={index}
              onChange={handleInput} >
              
              
              
              
             </input>
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

export default AdminSearch
