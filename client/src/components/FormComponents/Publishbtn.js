import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { checkImage } from '../../utils/imageUpload'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import { publishBiodata, updateProfileUser } from '../../redux/actions/profileAction'
import { Button, makeStyles } from '@material-ui/core'
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
    
  const { auth, theme } = useSelector(state => state)
   
  const dispatch = useDispatch()
  
  const  handlePublish = () => {
     dispatch(publishBiodata(auth))
    }

    
   
    
    

     

    

    

    

    return (
       <div>
             

      
    
                <Button fullWidth className={classes.tab} onClick={() => {
                
                handlePublish();
               }}  type="submit">Publish</Button>
            
        </div>
    )
}

export default EditProfile
