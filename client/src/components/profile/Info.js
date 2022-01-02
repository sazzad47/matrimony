import { CircularProgress } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import {useSelector} from 'react-redux'




import { GLOBALTYPES } from '../../redux/actions/globalTypes'



import SingleBio from './SingleBio'


const Info = ({id,profile, auth, dispatch}) => {
    const [userData, setUserData] = useState([])
    
    const {loading  } = useSelector(state => state.profile)
   

    useEffect(() => {
        if(id === auth.user._id){
            setUserData([auth.user])
        }else{
            const newData = profile.users.filter(user => user._id === id)
            setUserData(newData)
        }
    }, [id, auth, dispatch, profile.users])


   
    

    return (
        <>
        {loading? <div className='loading'><CircularProgress/> </div> :
        <div className ="px-3 px-md-5 px-lg-5 py-2 py-md-5 py-lg-5 biodatas_page" >
            {
                userData.map(user => (
                    <div key={user._id}>
                       
                       <Helmet>
                   <title>{`বায়োডাটা নং- ${ user.index }` }</title>
                   <meta name='description' content={`${user.aboutMe}`}/>
                   <link rel='canonical' href={`/biodatas/${user._id}`}/>
                    </Helmet>
                       
                        <SingleBio user= {user} auth={auth}  profile ={profile} id ={id} dispatch ={dispatch}/>
                    </div>
                ))
            }
        </div>}
        </>
    )
}

export default Info
