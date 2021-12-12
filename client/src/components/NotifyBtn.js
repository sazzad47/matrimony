import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { notifyUser, cancelNotification } from '../redux/actions/profileAction'

const NotifyBtn = ({user}) => {
    const [notifiedUser, setNotifiedUser] = useState(false)

    const { auth, profile, socket } = useSelector(state => state)
    const dispatch = useDispatch()

    const [load, setLoad] = useState(false)

    useEffect(() => {
        if(auth.user.notified.find(item => item._id === user._id)){
            setNotifiedUser(true)
        }
        return () => setNotifiedUser(false)
    }, [auth.user.notified, user._id])


    const handleNotify =  async () => {
        if(load) return;

        setNotifiedUser(true)
        setLoad(true)
        await dispatch(notifyUser({users: profile.users, user, auth, socket}))
        setLoad(false)
    }

    const handleCancelNotification = async () => {
        if(load) return;

        setNotifiedUser(false)
        setLoad(true)
        await dispatch(cancelNotification({users: profile.users, user, auth, socket}))
        setLoad(false)
    }

    return (
        <>
        {
            notifiedUser
            ? <button className="btn btn-outline-danger"
            onClick={handleCancelNotification}>
                Remove Notification
            </button>
            : <button className="btn btn-outline-info"
            onClick={handleNotify}>
                Notify
            </button>
        }
        
        </>
    )
}

export default NotifyBtn
