import React from 'react'
import { useDispatch } from 'react-redux'
import DeleteIcon from '@material-ui/icons/Delete'

import {  updateRequests } from '../../redux/actions/deleteAction'


const Request = ({user}) => {
  const dispatch = useDispatch();
 
  
  const handleDone = () => {
  
  dispatch(updateRequests(user))

  
  }

  
    return (
     
      
      <tr className={user.done==='yes'? 'deleteApplicant':''}>
     
      <th scope="row">{user.biodataNumber}</th>
      
      
      <td>{user.action}</td>
      <td>{user.reason}</td>
      <td> <DeleteIcon onClick={handleDone} /></td>
 
    </tr>
 

    )
}

export default Request
