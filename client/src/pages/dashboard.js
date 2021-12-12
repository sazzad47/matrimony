import React from 'react'
import { useSelector } from 'react-redux'
import {Grid, Typography} from '@material-ui/core'
import UserCard from '../components/UserCard'
import { getProfileUsers } from '../redux/actions/profileAction'


const Dashboard = () => {
    const { profile,auth } = useSelector(state => state)
    console.log(profile.users)

     
    return (
        <div>
            <Grid container>
                <Typography variant="h5"> যাদের অভিভাবক আপনার নিকট প্রস্তাব পাঠিয়েছেনঃ  
                </Typography>
         <div className="row biodatas">
        
         </div>
         </Grid>
            <Grid container>
                <Typography variant="h5"> যাদের অভিভাবক আপনার অভিভাবকের সাথে যোগাযোগ করতে সম্মত হয়েছেনঃ 
                </Typography>
         <div className="row biodatas">
         {auth.user.approvers.map((user) => (
        <UserCard 
        key={user._id} 
        user={user} 
        border="border"
        
        />
    ))}
         </div>
         </Grid>
        </div>
    )
}

export default Dashboard
