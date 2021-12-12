import React from 'react'
import Avatar from './Avatar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Paper } from '@material-ui/core'
import { approvePending, declinePending } from '../redux/actions/pendingAction'

const UserCard = ({children, user, border, handleClose, setShowApprovers, setShowApproved,
    setShowAcceptors, setShowAccepted, setShowFollowers, setShowFollowing, msg}) => {
    const firstLogin = localStorage.getItem('firstLogin')
    const dispatch = useDispatch();
    const { theme } = useSelector(state => state)
   
   
   
    const handleCloseAll = () => {
        if(handleClose) handleClose()
        if(setShowAcceptors) setShowAcceptors(false)
        if(setShowAccepted) setShowAccepted(false)
        if(setShowFollowers) setShowFollowers(false)
        if(setShowFollowing) setShowFollowing(false)
        if(setShowApprovers) setShowApprovers(false)
        if(setShowApproved) setShowApproved(false)
    }

    const showMsg = (user) => {
        return(
            <>
                <div style={{filter: theme ? 'invert(1)' : 'invert(0)'}}>
                    {user.text}
                </div>
                {
                    user.media.length > 0 && 
                    <div>
                        {user.media.length} <i className="fas fa-image" />
                    </div>
                }

                {
                    user.call &&
                    <span className="material-icons">
                        {
                            user.call.times === 0
                            ? user.call.video ? 'videocam_off' : 'phone_disabled'
                            : user.call.video ? 'video_camera_front' : 'call'
                        }
                    </span>
                }
            </>
        )
    }


    return (
        <div className="ml-4" >
        
            <div>
            <Link to={firstLogin? `/biodata/${user._id}` : `/biodatas/${user._id}`} onClick={handleCloseAll}
               > <button className="short-bio ">

            <Card elevation={24} >
         
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
      <div className="row" >
      <div className="col-md-12 w-100 ">
      <div className="my-3 mx-5"><Button disableRipple variant='contained'  color="primary" >সম্পূর্ণ বায়োডাটা</Button></div>
      </div> 
     
      
     
      </div>
      </div>

           
           </Card> 

               
                    
                   
                 </button>
                    
                </Link>
            </div>
            
            {children}
        </div>
    )
}

export default UserCard
