import { GLOBALTYPES, DeleteData } from './globalTypes'
import { getDataAPI, patchDataAPI } from '../../utils/fetchData'
import { imageUpload } from '../../utils/imageUpload'
import { createNotify, removeNotify } from '../actions/notifyAction'


export const PROFILE_TYPES = {
    LOADING: 'LOADING_PROFILE',
    GET_USER: 'GET_PROFILE_USER',
    FOLLOW: 'FOLLOW',
    UNFOLLOW: 'UNFOLLOW',
    ACCEPT: 'ACCEPT',
    REJECT: 'REJECT',
    APPROVE: 'APPROVE',
    DECLINE: 'DECLINE',
    REMOVE: 'REMOVE',
    CANCELREMOVAL: 'CANCELREMOVAL',
    NOTIFYUSER: 'NOTIFYUSER',
    CANCELNOTIFICATION: 'CANCELNOTIFICATION',
    GET_ID: 'GET_PROFILE_ID',
    GET_POSTS: 'GET_PROFILE_POSTS',
    UPDATE_POST: 'UPDATE_PROFILE_POST',
    PUBLISH_BIODATA:'PUBLISH_BIODATA',
    
}


export const getProfileUsers = ({id,auth}) => async (dispatch) => {
    dispatch({type: PROFILE_TYPES.GET_ID, payload: id})

    try {
        dispatch({type: PROFILE_TYPES.LOADING, payload: true})
        const res = getDataAPI(`/user/${id}`,auth.token)
        const res1 = getDataAPI(`/user_posts/${id}`,auth.token)
        
        const users = await res;
        const posts = await res1;

        dispatch({
            type: PROFILE_TYPES.GET_USER,
            payload: users.data
        })

        dispatch({
            type: PROFILE_TYPES.GET_POSTS,
            payload: {...posts.data, _id: id, page: 2}
        })

        dispatch({type: PROFILE_TYPES.LOADING, payload: false})
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT, 
            payload: {error: err.response.data.msg}
        })
    }
    
}


export const updateProfileUser = ({userData,approval,allTrue, avatar, auth}) => async (dispatch) => {
   

    if(userData.prof.length > 25)
    return dispatch({type: GLOBALTYPES.ALERT, payload: {error: "সর্বোচ্চ ২৫ ক্যারেক্টারের মধ্যে লিখুন"}})

    try {
        let media;
        dispatch({type: GLOBALTYPES.ALERT, payload: {loading: true}})

        if(avatar) media = await imageUpload([avatar])

        const res = await patchDataAPI("user", {
            ...userData,approval,allTrue,
            avatar: avatar ? media[0].url : auth.user.avatar
        }, auth.token)

        dispatch({
            type: GLOBALTYPES.AUTH,
            payload: {
                ...auth,
                user: {
                    ...auth.user, ...userData, approval,allTrue,
                    avatar: avatar ? media[0].url : auth.user.avatar,
                }
            }
        })

        dispatch({type: GLOBALTYPES.ALERT, payload: {success: res.data.msg}})
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT, 
            payload: {error: err.response.data.msg}
        })
    }
}

export const publishBiodata = (auth) => async (dispatch) => {
   

   

    try {
        
       
        dispatch({type: GLOBALTYPES.ALERT, payload: {loading: true}})
       

        const res = await patchDataAPI(`user/${auth.user._id}/publish`,{isPublished:'yes'},auth.token)

        dispatch({
            type: PROFILE_TYPES.PUBLISH_BIODATA,
            payload: res.data.newBiodata
                   
                
            
        })

        dispatch({type: GLOBALTYPES.ALERT, payload: {success: res.data.msg}})
    } catch (err) {
        console.log(err)
    }
}


export const follow = ({users, user, auth, socket}) => async (dispatch) => {
    let newUser;
    
    if(users.every(item => item._id !== user._id)){
        newUser = {...user, followers: [...user.followers, auth.user]}
    }else{
        users.forEach(item => {
            if(item._id === user._id){
                newUser = {...item, followers: [...item.followers, auth.user]}
            }
        })
    }

    dispatch({ type: PROFILE_TYPES.FOLLOW, payload: newUser })

    dispatch({
        type: GLOBALTYPES.AUTH, 
        payload: {
            ...auth,
            user: {...auth.user, following: [...auth.user.following, newUser]}
        }
    })


    try {
        const res = await patchDataAPI(`user/${user._id}/follow`, null, auth.token)
        socket.emit('follow', res.data.newUser)

        // Notify
        const msg = {
            id: auth.user._id,
            text:`আসসালামু আলাইকুম! ${auth.user.pdistrict} থেকে ${auth.user.gender==='পাত্রের বায়োডাটা'? 'পাত্রপক্ষ': 'পাত্রীপক্ষ'} আপনার অভিভাবকের সাথে যোগাযোগ করতে চেয়েছেন। ${auth.user.gender==='পাত্রের বায়োডাটা'? 'পাত্রের' : 'পাত্রীর'} বায়োডাটা দেখতে লিংকে ক্লিক করুন।`,
            recipients: [newUser._id],
            url: `/biodata/${auth.user._id}`,
        }

        dispatch(createNotify({msg, auth, socket}))

    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT, 
            payload: {error: err.response.data.msg}
        })
    }
}

export const unfollow = ({users, user, auth, socket}) => async (dispatch) => {

    let newUser;

    if(users.every(item => item._id !== user._id)){
        newUser = {...user, followers: DeleteData(user.followers, auth.user._id)}
    }else{
        users.forEach(item => {
            if(item._id === user._id){
                newUser = {...item, followers: DeleteData(item.followers, auth.user._id)}
            }
        })
    }

    dispatch({ type: PROFILE_TYPES.UNFOLLOW, payload: newUser })

    dispatch({
        type: GLOBALTYPES.AUTH, 
        payload: {
            ...auth,
            user: { 
                ...auth.user, 
                following: DeleteData(auth.user.following, newUser._id) 
            }
        }
    })
   

    try {
        const res = await patchDataAPI(`user/${user._id}/unfollow`, null, auth.token)
        socket.emit('unFollow', res.data.newUser)

        // Notify
        const msg = {
            id: auth.user._id,
            text:`আসসালামু আলাইকুম! ${auth.user.pdistrict} থেকে ${auth.user.gender==='পাত্রের বায়োডাটা'? 'পাত্রপক্ষ': 'পাত্রীপক্ষ'} আপনার অভিভাবকের সাথে যোগাযোগ করতে চেয়েছেন। ${auth.user.gender==='পাত্রের বায়োডাটা'? 'পাত্রের' : 'পাত্রীর'} বায়োডাটা দেখতে লিংকে ক্লিক করুন।`,
            recipients: [newUser._id],
            url: `/biodata/${auth.user._id}`,
        }

        dispatch(removeNotify({msg, auth, socket}))

    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT, 
            payload: {error: err.response.data.msg}
        })
    }
}
export const accept = ({users, user, auth, socket}) => async (dispatch) => {
    let newUser;
    
    if(users.every(item => item._id !== user._id)){
        newUser = {...user, acceptors: [...user.acceptors, auth.user]}
    }else{
        users.forEach(item => {
            if(item._id === user._id){
                newUser = {...item, acceptors: [...item.acceptors, auth.user]}
            }
        })
    }

    dispatch({ type: PROFILE_TYPES.FOLLOW, payload: newUser })

    dispatch({
        type: GLOBALTYPES.AUTH, 
        payload: {
            ...auth,
            user: {...auth.user, accepted: [...auth.user.accepted, newUser]}
        }
    })



    try {
        const res = await patchDataAPI(`user/${user._id}/accept`, null, auth.token)
        socket.emit('accept', res.data.newUser)

        // Notify
        const msg = {
            id: auth.user._id,
            text: 'has started to accept you.',
            recipients: [newUser._id],
            url: `/biodata/${auth.user._id}`,
        }

        dispatch(createNotify({msg, auth, socket}))

    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT, 
            payload: {error: err.response.data.msg}
        })
    }
}

export const reject = ({users, user, auth, socket}) => async (dispatch) => {

    let newUser;

    if(users.every(item => item._id !== user._id)){
        newUser = {...user, acceptors: DeleteData(user.acceptors, auth.user._id)}
    }else{
        users.forEach(item => {
            if(item._id === user._id){
                newUser = {...item, acceptors: DeleteData(item.acceptors, auth.user._id)}
            }
        })
    }

    dispatch({ type: PROFILE_TYPES.REJECT, payload: newUser })

    dispatch({
        type: GLOBALTYPES.AUTH, 
        payload: {
            ...auth,
            user: { 
                ...auth.user, 
                accepted: DeleteData(auth.user.accepted, newUser._id) 
            }
        }
    })
   

    try {
        const res = await patchDataAPI(`user/${user._id}/reject`, null, auth.token)
        socket.emit('reject', res.data.newUser)

        // Notify
        const msg = {
            id: auth.user._id,
            text: 'has started to accept you.',
            recipients: [newUser._id],
            url: `/biodata/${auth.user._id}`,
        }

        dispatch(removeNotify({msg, auth, socket}))

    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT, 
            payload: {error: err.response.data.msg}
        })
    }
}
export const approve = ({users, user, auth, socket}) => async (dispatch) => {
    let newUser;
    
    if(users.every(item => item._id !== user._id)){
        newUser = {...user, approvers: [...user.approvers, auth.user]}
    }else{
        users.forEach(item => {
            if(item._id === user._id){
                newUser = {...item, approvers: [...item.approvers, auth.user]}
            }
        })
    }

    dispatch({ type: PROFILE_TYPES.APPROVE, payload: newUser })

    dispatch({
        type: GLOBALTYPES.AUTH, 
        payload: {
            ...auth,
            user: {...auth.user, approved: [...auth.user.approved, newUser]}
        }
    })


    try {
        const res = await patchDataAPI(`user/${user._id}/approve`, null, auth.token)
        socket.emit('approve', res.data.newUser)

        // Notify
        const msg = {
            id: auth.user._id,
            text:`আসসালামু আলাইকুম! বায়োডাটা নং-${auth.user.index} এর অভিভাবক আপনার অভিভাবককে যোগাযোগ করতে বলেছেন।`,
            recipients: [newUser._id],
            url: `/biodata/${auth.user._id}`,
        }

        dispatch(createNotify({msg, auth, socket}))

    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT, 
            payload: {error: err.response.data.msg}
        })
    }
}


export const decline = ({users, user, auth, socket}) => async (dispatch) => {

    let newUser;

    if(users.every(item => item._id !== user._id)){
        newUser = {...user, approvers: DeleteData(user.approvers, auth.user._id)}
    }else{
        users.forEach(item => {
            if(item._id === user._id){
                newUser = {...item, approvers: DeleteData(item.approvers, auth.user._id)}
            }
        })
    }

    dispatch({ type: PROFILE_TYPES.DECLINE, payload: newUser })

    dispatch({
        type: GLOBALTYPES.AUTH, 
        payload: {
            ...auth,
            user: { 
                ...auth.user, 
                approved: DeleteData(auth.user.approved, newUser._id) 
            }
        }
    })
   

    try {
        const res = await patchDataAPI(`user/${user._id}/decline`, null, auth.token)
        socket.emit('decline', res.data.newUser)

        // Notify
        const msg = {
            id: auth.user._id,
            text: 'has started to approve you.',
            recipients: [newUser._id],
            url: `/biodata/${auth.user._id}`,
        }

        dispatch(removeNotify({msg, auth, socket}))

    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT, 
            payload: {error: err.response.data.msg}
        })
    }
}
export const remove = ({users, user, auth, socket}) => async (dispatch) => {
    let newUser;
    
    if(users.every(item => item._id !== user._id)){
        newUser = {...user, removers: [...user.removers, auth.user]}
    }else{
        users.forEach(item => {
            if(item._id === user._id){
                newUser = {...item, removers: [...item.removers, auth.user]}
            }
        })
    }

    dispatch({ type: PROFILE_TYPES.REMOVE, payload: newUser })

    dispatch({
        type: GLOBALTYPES.AUTH, 
        payload: {
            ...auth,
            user: {...auth.user, removed: [...auth.user.removed, newUser]}
        }
    })


    try {
        const res = await patchDataAPI(`user/${user._id}/remove`, null, auth.token)
        socket.emit('remove', res.data.newUser)

        // Notify
        const msg = {
            id: auth.user._id,
            text: 'has started to remove you.',
            recipients: [newUser._id],
            url: `/biodata/${auth.user._id}`,
        }

        dispatch(createNotify({msg, auth, socket}))

    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT, 
            payload: {error: err.response.data.msg}
        })
    }
}


export const cancelRemoval = ({users, user, auth, socket}) => async (dispatch) => {

    let newUser;

    if(users.every(item => item._id !== user._id)){
        newUser = {...user, removers: DeleteData(user.removers, auth.user._id)}
    }else{
        users.forEach(item => {
            if(item._id === user._id){
                newUser = {...item, removers: DeleteData(item.removers, auth.user._id)}
            }
        })
    }

    dispatch({ type: PROFILE_TYPES.CANCELREMOVAL, payload: newUser })

    dispatch({
        type: GLOBALTYPES.AUTH, 
        payload: {
            ...auth,
            user: { 
                ...auth.user, 
                removed: DeleteData(auth.user.removed, newUser._id) 
            }
        }
    })
   

    try {
        const res = await patchDataAPI(`user/${user._id}/cancelRemoval`, null, auth.token)
        socket.emit('cancelRemoval', res.data.newUser)

        // Notify
        const msg = {
            id: auth.user._id,
            text: 'has started to remove you.',
            recipients: [newUser._id],
            url: `/biodata/${auth.user._id}`,
        }

        dispatch(removeNotify({msg, auth, socket}))

    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT, 
            payload: {error: err.response.data.msg}
        })
    }
}
export const notifyUser = ({users, user, auth, socket}) => async (dispatch) => {
    let newUser;
    
    if(users.every(item => item._id !== user._id)){
        newUser = {...user, notifiers: [...user.notifiers, auth.user]}
    }else{
        users.forEach(item => {
            if(item._id === user._id){
                newUser = {...item, notifiers: [...item.notifiers, auth.user]}
            }
        })
    }

    dispatch({ type: PROFILE_TYPES.NOTIFYUSER, payload: newUser })

    dispatch({
        type: GLOBALTYPES.AUTH, 
        payload: {
            ...auth,
            user: {...auth.user, notified: [...auth.user.notified, newUser]}
        }
    })


    try {
        const res = await patchDataAPI(`user/${user._id}/notifyUser`, null, auth.token)
        socket.emit('notifyUser', res.data.newUser)

        // Notify
        const msg = {
            id: auth.user._id,
            text: 'has started to notify you.',
            recipients: [newUser._id],
            url: `/biodata/${auth.user._id}`,
        }

        dispatch(createNotify({msg, auth, socket}))

    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT, 
            payload: {error: err.response.data.msg}
        })
    }
}


export const cancelNotification = ({users, user, auth, socket}) => async (dispatch) => {

    let newUser;

    if(users.every(item => item._id !== user._id)){
        newUser = {...user, notifiers: DeleteData(user.notifiers, auth.user._id)}
    }else{
        users.forEach(item => {
            if(item._id === user._id){
                newUser = {...item, notifiers: DeleteData(item.notifiers, auth.user._id)}
            }
        })
    }

    dispatch({ type: PROFILE_TYPES.CANCELNOTIFICATION, payload: newUser })

    dispatch({
        type: GLOBALTYPES.AUTH, 
        payload: {
            ...auth,
            user: { 
                ...auth.user, 
                notified: DeleteData(auth.user.notified, newUser._id) 
            }
        }
    })
   

    try {
        const res = await patchDataAPI(`user/${user._id}/cancelNotification`, null, auth.token)
        socket.emit('cancelNotification', res.data.newUser)

        // Notify
        const msg = {
            id: auth.user._id,
            text: 'has started to notify you.',
            recipients: [newUser._id],
            url: `/biodata/${auth.user._id}`,
        }

        dispatch(removeNotify({msg, auth, socket}))

    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT, 
            payload: {error: err.response.data.msg}
        })
    }
}