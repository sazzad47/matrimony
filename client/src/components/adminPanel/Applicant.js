import React from 'react'
import { useDispatch } from 'react-redux'
import DeleteIcon from '@material-ui/icons/Delete'

import { updateApplicant } from '../../redux/actions/applicantAction'


const Applicant = ({user}) => {
  const dispatch = useDispatch();
 
  
  const handleDone = () => {
  
  dispatch(updateApplicant(user))

  
  }

  
    return (
     
      
      <tr className={user.done==='yes'? 'deleteApplicant':''}>
     
      
      <td>{user.fullname}</td>
      <td>{user.district}</td>
      <td>{user.mobile}</td>
      <td>{user.email}</td>
      <td>{user.biodataNumber}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.trxID}</td>
      <td> <DeleteIcon onClick={handleDone} /></td>
 
    </tr>
 

    )
}

export default Applicant
