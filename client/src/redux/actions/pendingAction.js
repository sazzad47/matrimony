import { getDataAPI, patchDataAPI } from '../../utils/fetchData'
import { GLOBALTYPES } from './globalTypes';
import { createNotify, removeNotify } from '../actions/notifyAction'
export const PENDING_BIODATAS_TYPES = {
    LOADING: 'LOADING_PENDING_BIODATAS',
    GET_PENDING_BIODATAS: 'GET_PENDING_BIODATAS',
    APPROVE_PENDING_BIODATAS: 'APPROVE_PENDING_BIODATAS',
    DECLINE_PENDING_BIODATAS:'DECLINE_PENDING_BIODATAS',
    HIDE_BIODATA:'HIDE_BIODATA',
    DELETE_BIODATA:'DELETE_BIODATA',
}
export const getPendingBiodatas = (page) => async (dispatch) => {
    try {
        dispatch({ type: PENDING_BIODATAS_TYPES.LOADING, payload: true })
        const res = await getDataAPI(`/pendingBiodatas?page=${page}`);
        
        dispatch({type: PENDING_BIODATAS_TYPES.GET_PENDING_BIODATAS, payload: res.data.pendingBiodatas });
        dispatch({ type: PENDING_BIODATAS_TYPES.LOADING, payload: false })
    } catch (error) {
        console.log(error)
    }
}
export const approvePending = ({user, auth, socket}) => async (dispatch) => {
   

   

    try {
        
       
        dispatch({type: GLOBALTYPES.ALERT, payload: {loading: true}})
       

        const res = await patchDataAPI(`biodatas/${user._id}/approve`,{approval:'yes'})

        dispatch({
            type: PENDING_BIODATAS_TYPES.APPROVE_PENDING_BIODATAS,
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
            type: PENDING_BIODATAS_TYPES.DECLINE_PENDING_BIODATAS,
            payload: res.data.declinedBiodatas
                   
                
            
        })

        dispatch({type: GLOBALTYPES.ALERT, payload: {loading: false}})
    } catch (err) {
        console.log(err)
    }
}

export const hideBiodata = ({user, auth, socket}) => async (dispatch) => {
   

   

    try {
        
       
        dispatch({type: GLOBALTYPES.ALERT, payload: {loading: true}})
       

        const res = await patchDataAPI(`biodatas/${user._id}/hide`,{isPublished:'hidden'})

        dispatch({
            type: PENDING_BIODATAS_TYPES.HIDE_BIODATA,
            payload: res.data.hiddenBiodatas
                   
                
            
        })

        socket.emit('hide', res.data.hiddenBiodatas)

        // Notify
        const msg = {
            id: auth.user._id,
            text:`আসসালামু আলাইকুম! আপনার বায়োডাটা হাইড করা হয়েছে। বায়োডাটাটি পুনরায় লাইভ করতে Publish বাটনে চাপুন।`,
            recipients: [res.data.hiddenBiodatas._id],
            url: `/biodatas/${user._id}`,
        }

        dispatch(createNotify({msg, auth, socket}))

        dispatch({type: GLOBALTYPES.ALERT, payload: {loading: false}})
    } catch (err) {
        console.log(err)
    }
}

export const deleteBiodata = ({user, auth, socket}) => async (dispatch) => {
   

   

    try {
        
       
        dispatch({type: GLOBALTYPES.ALERT, payload: {loading: true}})
       

        const res = await patchDataAPI(`biodatas/${user._id}/delete`,{isPublished:'deleted'})

        dispatch({
            type: PENDING_BIODATAS_TYPES.DELETE_BIODATA,
            payload: res.data.deletedBiodatas
                   
                
            
        })
        socket.emit('delete', res.data.deletedBiodatas)

        // Notify
        const msg = {
            id: auth.user._id,
            text:`আসসালামু আলাইকুম! আপনার বায়োডাটা ওয়েবসাইট থেকে ডিলিট করা হয়েছে।`,
            recipients: [res.data.deletedBiodatas._id],
            url: `/biodatas/${user._id}`,
        }

        dispatch(createNotify({msg, auth, socket}))

        dispatch({type: GLOBALTYPES.ALERT, payload: {loading: false}})
    } catch (err) {
        console.log(err)
    }
}