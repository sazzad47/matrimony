import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { Box, Button, FormControl, InputLabel, makeStyles, Paper, Select } from '@material-ui/core'

import { useSelector, useDispatch } from 'react-redux'
import { getDataAPI } from '../utils/fetchData'
import { GLOBALTYPES } from '../redux/actions/globalTypes'
import UserCard from '../components/UserCard'
import LoadIcon from '../images/loading.gif'
import { getBiodatasBySearch } from '../redux/actions/getBiodatasAction'
import { getPendingBiodatas } from '../redux/actions/pendingAction';

const useStyles = makeStyles((theme)=>({
    bioSearchSelect: {
      minWidth:300,
      
},
        inputLabel:{
            alignItems:'center'
        }

   
  }));
  
const Pending = () => {
    
    const classes = useStyles();
    

    const { auth, pendingBiodatas } = useSelector(state => state.pendingBiodatas)
    const dispatch = useDispatch()
    const [load, setLoad] = useState(false)

  useEffect(() => {
     dispatch(getPendingBiodatas())
  }, [dispatch])
   
   
    
    return (
       
        !pendingBiodatas.length ? 'No biodata found':
        <div>
          <div className="biodatas">
          {
                 pendingBiodatas.map(user => (
                  <UserCard 
                  key={user._id} 
                  user={user} 
                  border="border"
                  
                  />
              ))
          }
      </div>
     
      </div>
      
    )
}

export default Pending
