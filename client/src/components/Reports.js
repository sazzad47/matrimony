import { CircularProgress } from '@material-ui/core';
import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'

import Report from './Report';
import { getApplicant } from '../redux/actions/reportAction'

const Reports = () => {
    const {loading, reports } = useSelector(state => state.reports)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getApplicant());
        
     }, [dispatch]);
   
    
    return (
      loading? <div className='loading'><CircularProgress/> </div>: !reports.length ? 'No reports found':
        <div>
            <table class="table table-bordered">
  <thead>
    <tr>
      
      <th scope="col">পূর্ণ নাম</th>
      <th scope="col">বিষয়</th>
      <th scope="col">সমস্যা</th>
      <th scope="col">ই-মেইল</th>
      
    </tr>
  </thead>
  <tbody>
             {
              reports.map(user => (
                  <Report
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

export default Reports
