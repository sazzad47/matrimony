import { CircularProgress } from '@material-ui/core';
import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'

import Request from './Request';
import { getRequests } from '../redux/actions/deleteAction'

const Requests = () => {
    const {loading, deleteRequests } = useSelector(state => state.deleteRequests)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRequests());
        
     }, [dispatch]);
   
    
    return (
      loading? <div className='loading'><CircularProgress/> </div> : !deleteRequests.length ? 'No request found':
        <div>
            <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">বায়োডাটা নং</th>
      <th scope="col">যা করতে চাই</th>
      <th scope="col">কারণ</th>
     
    </tr>
  </thead>
  <tbody>
             {
              deleteRequests.map(user => (
                  <Request
                  key={user._id} 
                  user={user} 
                 
                  
                  />
              ))
          }
          </tbody>
          </table>
        </div>
    )
}

export default Requests


