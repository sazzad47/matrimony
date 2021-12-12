import { makeStyles } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { accept, reject } from '../redux/actions/profileAction'
const useStyles = makeStyles((theme)=>({
    textfield: {
      margin:'20px'
    
      
     
      
  },
  tab: {
    backgroundColor:'#002884',
    color:'#FFFFFF',
    height:'35px',
  
    '&:hover': {
      backgroundColor: '#fff',
      color: '#000000',
      border:'1px solid #000000',
      height:'35px',
    
  },
  },
     
     
  
   
  }));
const AcceptBtn = ({user}) => {
    const classes = useStyles();
    const [isAccept, setIsAccept] = useState(false)

    const { auth, profile, socket } = useSelector(state => state)
    const dispatch = useDispatch()

    const [load, setLoad] = useState(false)

    useEffect(() => {
        if(auth.user.accepted.find(item => item._id === user._id)){
            setIsAccept(true)
        }
        return () => setIsAccept(false)
    }, [auth.user.accepted, user._id])

    const handleAccept =  async () => {
        if(load) return;

        setIsAccept(true)
        setLoad(true)
        await dispatch(accept({users: profile.users, user, auth, socket}))
        setLoad(false)
    }

    const handleReject = async () => {
        if(load) return;

        setIsAccept(false)
        setLoad(true)
        await dispatch(reject({users: profile.users, user, auth, socket}))
        setLoad(false)
    }

    return (
        <>
        {
            isAccept
            ? <button className="btn btn-outline-danger"
            onClick={handleReject}>
                Reject
            </button>
            : <button className="btn btn-outline-info"
            onClick={handleAccept}>
                Accept
            </button>
        }
        </>
    )
}

export default AcceptBtn
