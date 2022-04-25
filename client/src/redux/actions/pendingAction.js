import { getDataAPI, patchDataAPI } from '../../utils/fetchData'
import { GLOBALTYPES } from './globalTypes';
import { createNotify, removeNotify } from '../actions/notifyAction'

export const getPendingBiodatas = (page) => async (dispatch) => {
    try {
        const res = await getDataAPI(`/pendingBiodatas?page=${page}`);
        
        dispatch({type: 'GET_PENDING_BIODATAS', payload: res.data.pendingBiodatas });
    } catch (error) {
        console.log(error)
    }
}
export const approvePending = ({user, auth, socket}) => async (dispatch) => {
   

   

    try {
        
       
        dispatch({type: GLOBALTYPES.ALERT, payload: {loading: true}})
       

        const res = await patchDataAPI(`biodatas/${user._id}/approve`,{approval:'yes'})

        dispatch({
            type: 'APPROVE_PENDING',
            payload: res.data.approvedBiodatas
                   
                
            
        })

        socket.emit('approve', res.data.approvedBiodatas)

        // Notify
        const msg = {
            id: auth.user._id,
            text:`আসসালামু আলাইকুম! আপনার বায়োডাটা আমরা এপ্রুভ করেছি। JannaterSathi.com টিমের পক্ষ থেকে আপনার জন্য দু'আ রইলো।`,
            recipients: [res.data.approvedBiodatas._id],
            url: `/biodatas/${user._id}`,
        }

        dispatch(createNotify({msg, auth, socket}))

        dispatch({type: GLOBALTYPES.ALERT, payload: {loading: false}})
    } catch (err) {
        console.log(err)
    }
}
export const declinePending = ({user, auth, socket}) => async (dispatch) => {
   

   

    try {
        
       
        dispatch({type: GLOBALTYPES.ALERT, payload: {loading: true}})
       

        const res = await patchDataAPI(`biodatas/${user._id}/decline`,{approval:'declined'})

        dispatch({
            type: 'DECLINE_PENDING',
            payload: res.data.declinedBiodatas
                   
                
            
        })

        dispatch({type: GLOBALTYPES.ALERT, payload: {loading: false}})
    } catch (err) {
        console.log(err)
    }
}

