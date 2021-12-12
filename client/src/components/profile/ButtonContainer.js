import React, { useEffect, useState } from 'react'
import { useHistory,Link } from 'react-router-dom'
import {Grid, Typography} from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { publishBiodata, updateProfileUser } from '../../redux/actions/profileAction'
import FollowBtn from '../FollowBtn'
import ApproveBtn from '../ApproveBtn'
import ContactBtn from './ContactBtn'
import { approvePending, declinePending } from '../../redux/actions/pendingAction'

const ButtonContainer = ({user}) => {

    const history = useHistory();
    
   

    

    
    const  handlePublish = () => {
        dispatch(publishBiodata(auth))
       }

    const { auth, theme, socket } = useSelector(state => state)
    const dispatch = useDispatch()
    
    
    
    const  handleApproval = () => {
        dispatch(approvePending({user, auth, socket}))
        history.push('/pending')
       
      }  
    const  handleDecline = () => {
        dispatch(declinePending({user, auth, socket}))
        history.push('/pending')
       
      }  
    

     

    

    

   
    return (
        <div>
            <div className="row bio-btn-Container">
                {user._id===auth.user._id?
                <div className="col-6 col-md-6 col-lg-6">

                 <Link to='/edit_biodata'>
                     <button className="bio-edit-btn">Edit</button>
                 </Link>
                </div> : null
                } 
                 {auth.user.role==="admin"?
                <div className="col-6 col-md-6 col-lg-6">

                
                    <button onClick={handleApproval} className="bio-edit-btn">Approve</button>
                
               </div> : null}
      
                
                {auth.user.followers.find(item => item._id === user._id)?
                 <>
                  <div className="col-12 col-md-12 col-lg-12  d-flex justify-content-center">

                 <ApproveBtn user={user}/>
                 </div>
                 </>:
                 auth.user.approvers.find(item => item._id=== user._id)? 
                 <>
                 <div className="col-12 col-md-12 col-lg-12  d-flex justify-content-center">

                 <ContactBtn user = {user}/>
                 </div>
                 </>
                 :
                <>
                 {user._id===auth.user._id? null : auth.user.gender===''? null : user.gender===auth.user.gender? null : auth.user.gender==='পাত্রের বায়োডাটা'? (auth.user.approval==='no'? null : 
                 <div className="col-12 col-md-12 col-lg-12  d-flex justify-content-center">

                 <FollowBtn user={user}/>
                 </div>
                 ):
                <div className="col-12 col-md-12 col-lg-12  d-flex justify-content-center">
                    <FollowBtn user = {user}/>
                
                </div>}
                </>}
                {user._id===auth.user._id?
                <div className="col-6 col-md-6 col-lg-6 d-flex justify-content-end">
                <button 
                type='submit' 
                className="bio-publish-btn"
                onClick={() => {handlePublish();}}
                >Publish</button>
                </div>:null}

                {auth.user.role==="admin"?
                <div className="col-6 col-md-6 col-lg-6 d-flex justify-content-end">

                
                    <button 
                    onClick={handleDecline} 
                    className="bio-edit-btn">Decline</button>
                
               </div> : null}
            </div>
           
        </div>
    )
}

export default ButtonContainer
