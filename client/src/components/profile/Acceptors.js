import React from 'react'
import UserCard from '../UserCard'

import { useSelector } from 'react-redux'
import AcceptBtn from '../AcceptBtn'

const Acceptors = ({users, setShowAcceptors}) => {
    const { auth } = useSelector(state => state)
    return (
        <div className="follow">
            <div className="follow_box">
                <h5 className="text-center">Acceptors</h5>
                <hr/>
                
                <div className="follow_content">
                    {
                        users.map(user => (
                            <UserCard key={user._id} user={user} setShowAcceptors={setShowAcceptors} >
                                {
                                    auth.user._id !== user._id && <AcceptBtn user={user} />
                                }
                            </UserCard>
                        ))
                    }
                </div>
                

                <div className="close" onClick={() => setShowAcceptors(false)}>
                    &times;
                </div>
                
            </div>
        </div>
    )
}

export default Acceptors
