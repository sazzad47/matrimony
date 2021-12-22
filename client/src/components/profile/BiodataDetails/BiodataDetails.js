import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getBiodatas } from '../../../redux/actions/getBiodatasAction'
import DetailsComponents from './DetailsComponents'
import { CircularProgress } from '@material-ui/core';

const BiodataDetails = () => {
    const { biodatas ,isLoading } = useSelector(state => state.biodatas)
    const dispatch = useDispatch();
    const {id} = useParams ();

    useEffect(() => {
        dispatch(getBiodatas())
    }, [dispatch])
    return (
    <>  {isLoading? <div className='loading'><CircularProgress/> </div> : 
        <div className ="px-3 px-md-5 px-lg-5 py-2 py-md-5 py-lg-5 biodatas_page" >
        {
            biodatas.filter(user => user._id === id ).map(user => (
                <div key={user._id}>
                   

                   
                    <DetailsComponents user= {user} />
                </div>
            ))
        }
    </div>
        }
    </>
    )
}

export default BiodataDetails
