import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getBiodatas } from '../../../redux/actions/getBiodatasAction'
import DetailsComponents from './DetailsComponents'

const BiodataDetails = () => {
    const { biodatas } = useSelector(state => state.biodatas)
    const dispatch = useDispatch();
    const {id} = useParams ();

    useEffect(() => {
        dispatch(getBiodatas())
    }, [dispatch])
    return (
        <div className ="m-2 m-md-3 m-lg-5" >
        {
            biodatas.filter(user => user._id === id ).map(user => (
                <div key={user._id}>
                   

                   
                    <DetailsComponents user= {user} />
                </div>
            ))
        }
    </div>
    )
}

export default BiodataDetails
