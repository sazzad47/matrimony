import React, { useState, useEffect } from 'react'
import Avatar from '../Avatar'
import EditProfile from './EditProfile'
import FollowBtn from '../FollowBtn'
import Followers from './Followers'
import Following from './Following'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import ApproveBtn from '../ApproveBtn'
import Approvers from './Approvers'
import Approved from './Approved'
import AcceptBtn from '../AcceptBtn'
import Acceptors from './Acceptors'
import Accepted from './Accepted'
import RemoveBtn from '../RemoveBtn'
import NotifyBtn from '../NotifyBtn'

const Info = ({id, auth, profile, dispatch}) => {
    const [userData, setUserData] = useState([])
    const [onEdit, setOnEdit] = useState(false)

    const [showFollowers, setShowFollowers] = useState(false)
    const [showFollowing, setShowFollowing] = useState(false)
    const [showAcceptors, setShowAcceptors] = useState(false)
    const [showAccepted, setShowAccepted] = useState(false)
    const [showApprovers, setShowApprovers] = useState(false)
    const [showApproved, setShowApproved] = useState(false)

    useEffect(() => {
        if(id === auth.user._id){
            setUserData([auth.user])
        }else{
            const newData = profile.users.filter(user => user._id === id)
            setUserData(newData)
        }
    }, [id, auth, dispatch, profile.users])


    useEffect(() => {
        if(showApprovers || showApproved || showFollowers || showFollowing ||showAcceptors || showAccepted || onEdit){
            dispatch({ type: GLOBALTYPES.MODAL, payload: true})
        }else{
            dispatch({ type: GLOBALTYPES.MODAL, payload: false})
        }
    },[showApprovers, showApproved, showFollowers, showFollowing,showAcceptors, showAccepted, onEdit, dispatch])
    

    return (
        <div className="info">
            {
                userData.map(user => (
                    <div className="info_container" key={user._id}>
                        <Avatar src={user.avatar} size="supper-avatar" />

                        <div className="info_content">
                            <div className="info_content_title">
                                <h2>{user.username}</h2>
                                
                                {
                                    user._id === auth.user._id
                                    ?  <button className="btn btn-outline-info"
                                    onClick={() => setOnEdit(true)}>
                                        Edit Profile
                                    </button>
                                    
                                    : <><FollowBtn user={user} />
                                    <ApproveBtn user={user}/>
                                    <AcceptBtn user = {user}/>
                                    <RemoveBtn user={user}/>
                                    <NotifyBtn user = {user}/>
                                    </>
                                }
                             
                                
                            </div>

                            <div className="follow_btn">
                                <span className="mr-4" onClick={() => setShowFollowers(true)}>
                                    {user.followers.length} Followers
                                </span>
                                <span className="ml-4" onClick={() => setShowFollowing(true)}>
                                    {user.following.length} Following
                                </span>
                            </div>
                            <div className="follow_btn">
                                <span className="mr-4" onClick={() => setShowApprovers(true)}>
                                    {user.approvers.length} Approvers
                                </span>
                                <span className="ml-4" onClick={() => setShowApproved(true)}>
                                    {user.approved.length} Approved
                                </span>
                            </div>
                            <div className="follow_btn">
                                <span className="mr-4" onClick={() => setShowAcceptors(true)}>
                                    {user.acceptors.length} Acceptors
                                </span>
                                <span className="ml-4" onClick={() => setShowAccepted(true)}>
                                    {user.accepted.length} Accepted
                                </span>
                            </div>
                            <div className="follow_btn">
                                <span className="mr-4" onClick={() => setShowAcceptors(true)}>
                                    {user.removers.length} Removers
                                </span>
                                <span className="ml-4" onClick={() => setShowAccepted(true)}>
                                    {user.removed.length} Removed
                                </span>
                            </div>
                            <div className="follow_btn">
                                <span className="mr-4" onClick={() => setShowAcceptors(true)}>
                                    {user.notifiers.length} Notifiers
                                </span>
                                <span className="ml-4" onClick={() => setShowAccepted(true)}>
                                    {user.notified.length} Notified
                                </span>
                            </div>

                            <h6>{user.fullname} <span className="text-danger">{user.mobile}</span></h6>
                            <p className="m-0">{user.address}</p>
                            <h6 className="m-0">{user.email}</h6>
                            <a href={user.website} target="_blank" rel="noreferrer">
                                {user.website}
                            </a>
                            <p>{user.story}</p>
                        </div>

                        {
                            onEdit && <EditProfile setOnEdit={setOnEdit} />
                        }

                        {
                            showFollowers &&
                            <Followers 
                            users={user.followers} 
                            setShowFollowers={setShowFollowers} 
                            />
                        }
                        {
                            showFollowing &&
                            <Following 
                            users={user.following} 
                            setShowFollowing={setShowFollowing} 
                            />
                        }
                        {
                            showApprovers &&
                            <Approvers 
                            users={user.approvers} 
                            setShowApprovers={setShowApprovers} 
                            />
                        }
                        {
                            showApproved &&
                            <Approved 
                            users={user.approved} 
                            setShowApproved={setShowApproved} 
                            />
                        }
                         {
                            showAcceptors &&
                            <Acceptors 
                            users={user.acceptors} 
                            setShowAcceptors={setShowAcceptors} 
                            />
                        }
                        {
                            showAccepted &&
                            <Accepted 
                            users={user.accepted} 
                            setShowAccepted={setShowAccepted} 
                            />
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Info
