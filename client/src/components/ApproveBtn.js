import { Button, Card, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { approve, decline } from '../redux/actions/profileAction'
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
const ApproveBtn = ({user}) => {
    const classes = useStyles();
    const [followed, setFollowed] = useState(false)

    const { auth, profile, socket } = useSelector(state => state)
    const dispatch = useDispatch()

    const [load, setLoad] = useState(false)

    useEffect(() => {
        if(auth.user.approved.find(item => item._id === user._id)){
            setFollowed(true)
        }
        return () => setFollowed(false)
    }, [auth.user.approved, user._id])


    const handleFollow =  async () => {
        if(load) return;

        setFollowed(true)
        setLoad(true)
        await dispatch(approve({users: profile.users, user, auth, socket}))
        setLoad(false)
    }

    const handleUnFollow = async () => {
        if(load) return;

        setFollowed(false)
        setLoad(true)
        await dispatch(decline({users: profile.users, user, auth, socket}))
        setLoad(false)
    }

    return (
        <>
        {
            followed
            ? <>
            <Grid 
            container
            alignItems='center'
            justifyContent='center' >
             <Typography style={{marginBottom:'20px'}} align = 'center'>আলহামদুলিল্লাহ! {user.gender==='পাত্রের বায়োডাটা'?'পাত্রপক্ষের' : 'পাত্রীপক্ষের'} নিকট আপনার সম্মতির বিষয়ে নোটিফিকেশন পাঠানো হয়েছে। তারা নির্ধারিত ফি পরিশোধ করলে আপনার যোগাযোগ তথ্য তাদেরকে দেয়া হবে ইন-শা-আল্লাহ।</Typography>
              
            </Grid>
            
            
            
            </>
            : 
            <>
            <Grid 
            container
            alignItems='center'
            justifyContent='center' >
             <Typography style={{marginBottom:'20px'}} align = 'center'>উক্ত {user.gender==='পাত্রের বায়োডাটা'?'পাত্রের' : 'পাত্রীর'} অভিভাবক আপনার অভিভাবকের সাথে যোগাযোগ করতে চেয়েছেন। আপনার অভিভাবক যদি যোগাযোগ করতে আগ্রহী হোন, তাহলে নীচের বাটনে চাপুন।</Typography>
             <Card className={classes.BioSearchBox}  onClick={handleFollow}  elevation={3}>
        
      
      
     
     

     
        <div className="container-fluid" >
       
           <div className='row mx-3 my-4'>
               <Grid container spacing={2}>
                  
               <Grid item xs ={12} md={12}>
               <Typography align='center' variant='h6'>
                     {user.gender==='পাত্রের বায়োডাটা'?'পাত্রের' : 'পাত্রীর'} অভিভাবককে যোগাযোগ করতে বলুন 
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

export default ApproveBtn
