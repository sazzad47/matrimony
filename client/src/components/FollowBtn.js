import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  follow, unfollow } from '../redux/actions/profileAction'
const useStyles = makeStyles((theme)=>({
    textfield: {
      margin:'20px'
    
      
     
      
  },
  tab: {
    backgroundColor:'#002884',
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
const FollowBtn = ({user}) => {
    const classes = useStyles();
    const [followed, setFollowed] = useState(false)
  

    const { auth, profile, socket } = useSelector(state => state)
    const dispatch = useDispatch()

    const [load, setLoad] = useState(false)

    useEffect(() => {
       
        auth.user.following.find(item => item._id === user._id)?
        setFollowed(true) 
        
        : setFollowed(false)
          
    }, [auth.user.following, user._id])

    const handleFollow =  async () => {
        if(load) return;

        setFollowed(true)
        setLoad(true)
        await dispatch(follow({users: profile.users, user, auth, socket}))
        setLoad(false)
    }

    const handleUnFollow = async () => {
        if(load) return;

        setFollowed(false)
        setLoad(true)
        await dispatch(unfollow({users: profile.users, user, auth, socket}))
        setLoad(false)
    }
    

    return (
        <>
        
        {
            followed
            ? 
            <>
            <Grid 
            container
            alignItems='center'
            justifyContent='center' >
             <Typography align = 'center'>আলহামদুলিল্লাহ! আমরা আপনার বায়োডাটা {user.gender==='পাত্রের বায়োডাটা'?'পাত্রপক্ষের' : 'পাত্রীপক্ষের'} নিকট পাঠিয়েছি। {user.gender==='পাত্রের বায়োডাটা'?'পাত্রপক্ষ' : 'পাত্রীপক্ষ'} আপনার অভিভাবককে যোগাযোগ করতে বললে আমরা আপনাকে নোটিফিকেশনের মাধ্যমে জানিয়ে দেবো ইন-শা-আল্লাহ।</Typography>
                        
            </Grid>
            
            
            
            </>
            :<>
            <Grid 
            container
            alignItems='center'
            justifyContent='center' >
            <Typography style={{marginBottom:'20px'}} align = 'center'>আপনার অভিভাবক যদি আমাদের মাধ্যমে {user.gender==='পাত্রের বায়োডাটা'?'পাত্রপক্ষের' : 'পাত্রীপক্ষের'} নিকট প্রস্তাব পাঠাতে আগ্রহী হোন, তাহলে নীচের বাটনে চাপুন।</Typography>
            <Button disableRipple style={{maxWidth:'600px',}} className={classes.tab}
            onClick={handleFollow}> 
            <Typography>
            {user.gender==='পাত্রের বায়োডাটা'?'পাত্রপক্ষকে' : 'পাত্রীপক্ষকে'} আপনার বায়োডাটা প্রেরণ করুন
            </Typography>
              
            </Button>  
                    </Grid>
            
            
            </>
        }
        
        </>
    )
}

export default FollowBtn
