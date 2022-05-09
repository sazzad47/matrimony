import { Card, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  follow, unfollow } from '../redux/actions/profileAction'
const useStyles = makeStyles((theme)=>({
    textfield: {
      margin:'20px'
    
      
     
      
  },
  BioSearchBox: {
    backgroundColor:'#880e4f',
    color:'	#FFFFFF',
    '&:hover': {
      backgroundColor: 'hsl(320, 94%, 21%)',
      color: '#FFFFFF',
      outline:'none',
      cursor:'pointer'
    }
    
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
             <Typography align = 'center'>আলহামদুলিল্লাহ! আপনার বায়োডাটা {user.gender==='পাত্রের বায়োডাটা'?'পাত্রপক্ষের' : 'পাত্রীপক্ষের'} নিকট পাঠানো হয়েছে। {user.gender==='পাত্রের বায়োডাটা'?'পাত্রপক্ষ' : 'পাত্রীপক্ষ'} আপনাকে যোগাযোগ করতে বললে আপনাকে নোটিফিকেশনের মাধ্যমে জানানো হবে ইন-শা-আল্লাহ।</Typography>
                        
            </Grid>
            
            
            
            </>
            :<>
            <Grid 
            container
            alignItems='center'
            justifyContent='center' >
            <Typography style={{marginBottom:'20px'}} align = 'center'>আপনি যদি আমাদের মাধ্যমে {user.gender==='পাত্রের বায়োডাটা'?'পাত্রপক্ষের' : 'পাত্রীপক্ষের'} নিকট প্রস্তাব পাঠাতে আগ্রহী হন, তাহলে নীচের বাটনে চাপুন।</Typography>
            <Card className={classes.BioSearchBox}  onClick={handleFollow}  elevation={3}>
        
      
      
     
     

     
      <div className="container-fluid" >
     
         <div className='row mx-3 my-4'>
             <Grid container spacing={2}>
                
             <Grid item xs ={12} md={12}>
             <Typography variant='h6' align='center'>
            {user.gender==='পাত্রের বায়োডাটা'?'পাত্রপক্ষকে' : 'পাত্রীপক্ষকে'} আপনার বায়োডাটা প্রেরণ করুন
            </Typography>
            </Grid>
            
             
        
             
            
             
        </Grid>
        </div>
        
         
     </div>
     
      
        
        
        
       
     </Card>
            
                    </Grid>
            
            
            </>
        }
        
        </>
    )
}

export default FollowBtn
