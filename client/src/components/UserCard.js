import React from 'react'
import Avatar from './Avatar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Grid, makeStyles, Paper } from '@material-ui/core'
import { approvePending, declinePending } from '../redux/actions/pendingAction'

const useStyles = makeStyles((theme)=>({
    
    biodata:{
      
    }
   
  }));
 

const UserCard = ({children, user, border, handleClose, setShowApprovers, setShowApproved,
    setShowAcceptors, setShowAccepted, setShowFollowers, setShowFollowing, msg}) => {
    const firstLogin = localStorage.getItem('firstLogin')
    const dispatch = useDispatch();
    const { theme } = useSelector(state => state)
   
    const classes = useStyles();
   
    const handleCloseAll = () => {
        if(handleClose) handleClose()
        if(setShowAcceptors) setShowAcceptors(false)
        if(setShowAccepted) setShowAccepted(false)
        if(setShowFollowers) setShowFollowers(false)
        if(setShowFollowing) setShowFollowing(false)
        if(setShowApprovers) setShowApprovers(false)
        if(setShowApproved) setShowApproved(false)
    }

    

    return (
        
        
            
            <Link style={{ textDecoration: 'none', }} to={`/biodatas/${user._id}`} onClick={handleCloseAll}
               >  
               
        

            <Card elevation={6} className={classes.biodata}>
         
         <div className="profileText">
             <div className="imgBx">
             
             {
                 user.gender==='পাত্রের বায়োডাটা'?
                 <img src={user.groomPhoto} />
                 :  <img src={user.bridePhoto} />
             }
            
             
             </div>
             <h2>Biodata No-{user.index}</h2>
           </div>

        
           
          
           <div className=" short-bio-info"> 
          
          <div className="row px-4 px-lg-4 pt-3" >
       <div className="col-md-6 w-50 w-lg-50  boxQ ">
 
        <div className="short-bio-text">বয়স</div> 
        </div>
      <div className="col-md-6 w-50 w-lg-50  boxA">
      <div className="short-bio-text">{user.age}
</div>   
      </div>
       </div>
      </div>
        
        
     
          <div className=" short-bio-info"> 
          
          <div className="row px-4 px-lg-4 pt-3" >
       <div className="col-md-6 w-50 w-lg-50  boxQ ">
 
        <div className="short-bio-text">বৈবাহিক অবস্থা</div> 
        </div>
      <div className="col-md-6 w-50 w-lg-50  boxA">
      <div className="short-bio-text">{user.status}
</div>   
      </div>
       </div>
      </div>

     
         
          <div className=" short-bio-info"> 
          
          <div className="row px-4 px-lg-4 pt-3" >
       <div className="col-md-6 w-50 w-lg-50  boxQ ">
 
        <div className="short-bio-text">জেলা</div> 
        </div>
      <div className="col-md-6 w-50 w-lg-50  boxA">
      <div className="short-bio-text">{user.pdistrict}
</div>   
      </div>
       </div>
      </div>
        
          
      
      <div className='short-bio-info-ft'>
      <div className="row d-flex justify-content-center my-3" >
      <div className="col-6 col-md-6 col-lg-6 w-100">
      <Button disableRipple fullWidth variant='contained'  color="primary" >সম্পূর্ণ বায়োডাটা</Button>
      </div> 
     
      
     
      </div>
      </div>

         
           </Card> 

               
                    
                   
                
                    
                
                </Link>
          
            
          


    )
}

export default UserCard
