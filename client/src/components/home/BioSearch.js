import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { Box, Button, Card, FormControl, Grid, InputLabel, makeStyles, Paper, Select, TextField, Typography } from '@material-ui/core'

import { useSelector, useDispatch } from 'react-redux'
import { pdistricts } from '../FormComponents/Data'
import searchPhoto from '../../images/searchPhoto.png'

import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import UserCard from '../UserCard'

import { getBiodatas, getBiodatasBySearch } from '../../redux/actions/getBiodatasAction'
const useStyles = makeStyles((theme)=>({
    bioSearchSelect: {
      minWidth:300,
      
},
        inputLabel:{
            alignItems:'center'
        }

   
  }));
  

const BioSearch = () => {
    const { auth, biodatas } = useSelector(state => state.biodatas)
    const dispatch = useDispatch()
    const history = useHistory();
    
    const classes = useStyles();
    const initState = {
     gender:'',status:'',pdistrict:"", 
  }
  const [userData, setUserData] = useState(initState)
  const { gender,status,pdistrict, } = userData
    
    
  const districts = pdistricts.map((name) => (
    <option
      key={name}
      value={name}
      className="pl-3"
    >
      {name}
    </option>
  ))
  
 
    

      const handleInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]:value })
    }
    
   
   
   
    

    const handleSearch = async (e) => {
        e.preventDefault()
        

        try {
            if (gender==='none' && status==='none' && pdistrict==='none' ) {
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
    

    useEffect(() => {
        if (gender===!'none' && status==!'none' && pdistrict===!'none') {
          dispatch(getBiodatasBySearch(userData));
      } 
    }, [dispatch])
   
    
    return (
        <div>
     <Card elevation={6}>
        <form onSubmit={handleSearch}>
      
      
     
     

     
     <div className="container-fluid" >
     <div className='row mx-3 my-4'>
       <Grid
        container
         alignItems="center"
         justifyContent="center"
         ><img src={searchPhoto} className='img-fluid'/></Grid>
         </div>
         <div className='row mx-3 my-4'>
             <Grid container spacing={2}>
                 <Grid item xs={12} md={12}>
             <TextField
              label="বায়োডাটার ধরণ"
              select
              fullWidth
              variant="outlined"
              id="gender"
              name="gender"
              value={gender}
              onChange={handleInput} >
              <option value='none'>সকল</option>
              <option value="পাত্রের">পাত্রের বায়োডাটা</option>
              <option value="পাত্রীর">পাত্রীর বায়োডাটা</option>
             </TextField>
             </Grid>
             
        
             <Grid item xs ={12} md={12}>
             <TextField
              label="বৈবাহিক অবস্থা"
              select
              fullWidth
              variant="outlined"
              id="status"
              name="status"
              value={status}
              onChange={handleInput} >
                    <option value='none' className="pl-4">সকল</option>
                   <option value ="অবিবাহিত" className="pl-4">অবিবাহিত</option>
                   <option value ="ডিভোর্সড" className="pl-4">ডিভোর্সড</option>
                   <option value ="বিধবা" className="pl-4">বিধবা</option>
                   <option value ="বিপত্নীক" className="pl-4">বিপত্নীক</option>
                   <option value ="বিবাহিত" className="pl-4">বিবাহিত</option>
             </TextField>
            </Grid>
            
             <Grid item xs ={12} md={12}>
             <TextField
              label="জেলা"
              select
              fullWidth
             
              variant="outlined"
              id="pdistrict"
              name="pdistrict"
              value={pdistrict}
              onChange={handleInput} >
              <option value="none"  className="pl-3">সকল </option>
              {districts}
              
              
              
             </TextField>
            </Grid>
        
             
            
             <Grid item  xs ={12} md={12} lg={12}>
         <Button disableRipple type="submit" variant="contained" fullWidth color="primary">Search</Button>
      
        </Grid>
        </Grid>
        </div>
        
         
     </div>
     
      
        
        
        
        </form>
     </Card>
         
     
      
      </div>
    )
}

export default BioSearch
