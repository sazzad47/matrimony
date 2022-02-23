import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DeleteIcon from '@material-ui/icons/Delete'
import { patchDataAPI } from '../utils/fetchData'
import { getApplicant, updateApplicant } from '../redux/actions/applicantAction'
import { CircularProgress } from '@material-ui/core'

const Applicant = ({user}) => {
  const dispatch = useDispatch();
 
  
  const handleDone = () => {
  
  dispatch(updateApplicant(user))

  
  }

  
    return (
     
      
      <tr className={user.done==='yes'? 'deleteApplicant':''}>
     
      <th scope="row">{user.index}</th>
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
