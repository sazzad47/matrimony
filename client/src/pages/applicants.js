import { CircularProgress } from '@material-ui/core';
import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'

import Applicant from '../components/Applicant';
import { getApplicant } from '../redux/actions/applicantAction'

const Applicants = () => {
    const { applicants } = useSelector(state => state.applicants)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getApplicant());
        
     }, [dispatch]);
   
    
    return (
      !applicants.length ? 'No applicants found':
        <div>
            <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">ক্রমিক নং</th>
      <th scope="col">পূর্ণ নাম</th>
      <th scope="col">জেলা</th>
      <th scope="col">যোগাযোগ</th>
      <th scope="col">ই-মেইল</th>
      <th scope="col">মোবাইল নাম্বার</th>
      <th scope="col">Transaction ID</th>
    </tr>
  </thead>
  <tbody>
             {
              applicants.map(user => (
                  <Applicant
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

export default Applicants
