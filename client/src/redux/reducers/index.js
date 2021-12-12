import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import sessionStorage from 'redux-persist/es/storage/session'
import auth from './authReducer'
import alert from './alertReducer'
import theme from './themeReducer'
import profile from './profileReducer'
import status from './statusReducer'
import homePosts from './postReducer'
import modal from './modalReducer'
import detailPost from './detailPostReducer'
import discover from './discoverReducer'
import suggestions from './suggestionsReducer'
import socket from './socketReducer'
import notify from './notifyReducer'
import message from './messageReducer'
import online from './onlineReducer'
import call from './callReducer'
import peer from './peerReducer'
import biodatas from './searchBiodataReducer'

import applicants from './applicantReducer'
import pendingBiodatas from './pendingReducer'

const persistConfig = {
    key:'root',
    storage: sessionStorage ,
    whitelist:['biodatas']
}
const rootReducer = combineReducers({
    auth,
    alert,
    theme,
    profile,
    status,
    homePosts,
    modal,
    detailPost,
    discover,
    biodatas,
    
    suggestions,
    socket,
    notify,
    message,
    online,
    call,
    peer,
    applicants,
    pendingBiodatas,
    
})
export default persistReducer(persistConfig,rootReducer)