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
  

const BioSearch = () => {
    const { auth, biodatas } = useSelector(state => state.biodatas)
    const dispatch = useDispatch()
    const history = useHistory();
    
    const classes = useStyles();
    const initState = {
     gender:'',status:'',pdivision:"", index:""
  }
  const [userData, setUserData] = useState(initState)
  const { gender,status,pdivision,index } = userData
    
    
  const divisions = pdivisions.map((name) => (
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
            if (gender==='none' && status==='none' && pdivision==='none' && index==='none' ) {
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
    

    // useEffect(() => {
    //     if (gender===!'none' && status==!'none' && pdivision===!'none') {
    //       dispatch(getBiodatasBySearch(userData));
    //   } 
    // }, [dispatch])
   
    
    return (
        <div>
     <Card className={classes.BioSearchBox}  elevation={3}>
        <form onSubmit={handleSearch}>
      
      
     
     

     
      <div className="container-fluid" >
     
         <div className='row mx-3 my-4'>
             <Grid container spacing={2}>
                 <Grid item xs={5} md={5}>
             <Typography align="right">আমি খুঁজছি</Typography>
             </Grid>
                 <Grid item xs={7} md={7}>
             <select
             className='bioSearchSelect'
             
              
              
              id="gender"
              name="gender"
              value={gender}
              onChange={handleInput} >
               
              <option value='none'>সকল</option>
              <option value="পাত্রের">পাত্রের বায়োডাটা</option>
              <option value="পাত্রীর">পাত্রীর বায়োডাটা</option>
             </select>
             </Grid>
                 <Grid item xs={5} md={5}>
            <Typography align="right">বৈবাহিক অবস্থা</Typography>
             </Grid>
             <Grid item xs ={7} md={7}>
             <select
             className='bioSearchSelect'
              
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
             </select>
            </Grid>
             
        
             <Grid item xs ={5} md={5}>
             <Typography align="right">বিভাগ</Typography>
            </Grid>
            
             <Grid item xs ={7} md={7}>
             <select
             className='bioSearchSelect'
              
              id="pdivision"
              name="pdivision"
              value={pdivision}
              onChange={handleInput} >
              <option value="none"  className="pl-3">সকল </option>
              {divisions}
              
              
              
             </select>
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

export default BioSearch
