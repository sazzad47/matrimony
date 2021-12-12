import React from 'react'
import UserCard from '../UserCard'
import ApproveBtn from '../ApproveBtn'
import { useSelector } from 'react-redux'

const Approved = ({users, setShowApproved}) => {
    const { auth } = useSelector(state => state)
    return (
        <div className="follow">
            <div className="follow_box">
                <h5 className="text-center">Approved</h5>
                <hr/>

                <div className="follow_content">
                    {
                        users.map(user => (
                            <UserCard key={user._id} user={user} setShowApproved={setShowApproved} >
                                {
                                    auth.user._id !== user._id && <ApproveBtn user={user} />
                                }
                            </UserCard>
                        ))
                    }
                </div>

                <div className="close" onClick={() => setShowApproved(false)}>
                    &times;
                </div>
                
            </div>
        </div>
    )
}

export default Approved
