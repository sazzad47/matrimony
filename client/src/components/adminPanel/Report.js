import React from 'react'
import { useDispatch } from 'react-redux'
import DeleteIcon from '@material-ui/icons/Delete'

import { updateApplicant } from '../../redux/actions/reportAction'


const Report = ({user}) => {
  const dispatch = useDispatch();
 
  
  const handleDone = () => {
  
  dispatch(updateApplicant(user))

  
  }

  
    return (
     
      
      <tr className={user.done==='yes'? 'deleteApplicant':''}>
     
      
      <td>{user.fullname}</td>
      <td>{user.subject}</td>
      <td>{user.report}</td>
      <td>{user.email}</td>
     
      <td> <DeleteIcon onClick={handleDone} /></td>
 
    </tr>
 

    )
}

export default Report
