import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove, cancelRemoval } from '../redux/actions/profileAction'

const RemoveBtn = ({user}) => {
    const [removed, setRemoved] = useState(false)

    const { auth, profile, socket } = useSelector(state => state)
    const dispatch = useDispatch()

    const [load, setLoad] = useState(false)

    useEffect(() => {
        if(auth.user.removed.find(item => item._id === user._id)){
            setRemoved(true)
        }
        return () => setRemoved(false)
    }, [auth.user.removed, user._id])


    const handleRemove =  async () => {
        if(load) return;

        setRemoved(true)
        setLoad(true)
        await dispatch(remove({users: profile.users, user, auth, socket}))
        setLoad(false)
    }

    const handleCancelRemoval = async () => {
        if(load) return;

        setRemoved(false)
        setLoad(true)
        await dispatch(cancelRemoval({users: profile.users, user, auth, socket}))
        setLoad(false)
    }

    return (
        <>
        {
            removed
            ? <button className="btn btn-outline-danger"
            onClick={handleCancelRemoval}>
                Cancel Removal
            </button>
            : <button className="btn btn-outline-info"
            onClick={handleRemove}>
                Remove
            </button>
        }
       
        </>
    )
}

export default RemoveBtn
