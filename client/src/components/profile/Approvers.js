import React from 'react'
import UserCard from '../UserCard'
import ApproveBtn from '../ApproveBtn'
import { useSelector } from 'react-redux'

const Approvers = ({users, setShowApprovers}) => {
    const { auth } = useSelector(state => state)
    return (
        <div className="follow">
            <div className="follow_box">
                <h5 className="text-center">Approvers</h5>
                <hr/>
                
                <div className="follow_content">
                    {
                        users.map(user => (
                            <UserCard key={user._id} user={user} setShowApprovers={setShowApprovers} >
                                {
                                    auth.user._id !== user._id && <ApproveBtn user={user} />
                                }
                            </UserCard>
                        ))
                    }
                </div>
                

                <div className="close" onClick={() => setShowApprovers(false)}>
                    &times;
                </div>
                
            </div>
        </div>
    )
}

export default Approvers
