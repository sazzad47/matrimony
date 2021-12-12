import React from 'react'
import UserCard from '../UserCard'

import { useSelector } from 'react-redux'
import AcceptBtn from '../AcceptBtn'

const Accepted = ({users, setShowAccepted}) => {
    const { auth } = useSelector(state => state)
    return (
        <div className="follow">
            <div className="follow_box">
                <h5 className="text-center">Accepted</h5>
                <hr/>

                <div className="follow_content">
                    {
                        users.map(user => (
                            <UserCard key={user._id} user={user} setShowAccepted={setShowAccepted} >
                                {
                                    auth.user._id !== user._id && <AcceptBtn user={user} />
                                }
                            </UserCard>
                        ))
                    }
                </div>

                <div className="close" onClick={() => setShowAccepted(false)}>
                    &times;
                </div>
                
            </div>
        </div>
    )
}

export default Accepted
