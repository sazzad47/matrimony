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
        <div className ="px-4 px-md-5 px-lg-5 py-2 py-md-5 py-lg-5 biodatas_page" >
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
