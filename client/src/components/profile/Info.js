import React, { useState, useEffect } from 'react'





import { GLOBALTYPES } from '../../redux/actions/globalTypes'



import SingleBio from './SingleBio'


const Info = ({id,profile, auth, dispatch}) => {
    const [userData, setUserData] = useState([])
    

   

    useEffect(() => {
        if(id === auth.user._id){
            setUserData([auth.user])
        }else{
            const newData = profile.users.filter(user => user._id === id)
            setUserData(newData)
        }
    }, [id, auth, dispatch, profile.users])


   
    

    return (
        <div className ="m-2 m-md-3 m-lg-5" >
            {
                userData.map(user => (
                    <div key={user._id}>
                       

                       
                        <SingleBio user= {user} auth={auth}  profile ={profile} id ={id} dispatch ={dispatch}/>
                    </div>
                ))
            }
        </div>
    )
}

export default Info
