import { GLOBALTYPES} from './globalTypes'
import { postDataAPI, getDataAPI,patchDataAPI } from '../../utils/fetchData'
export const APPLICANT_TYPES = {
    LOADING: 'LOADING_APPLICANT',
    CREATE_APPLICANT: 'CREATE_APPLICANT',
    GET_APPLICANT: 'GET_APPLICANT',
    UPDATE_APPLICANT:'UPDATE_APPLICANT'
}

export const createApplicant = ({fullname, email, subject, report,}) => async (dispatch) => {
   

   

    try {
        
        dispatch({type: GLOBALTYPES.ALERT, payload: {loading: true}})

       

        const res = await postDataAPI('report', {
            fullname, email, subject, report,
           
        })

        dispatch({
            type: APPLICANT_TYPES.CREATE_APPLICANT,
            payload: res.data.newApplicant
        })

        dispatch({type: GLOBALTYPES.ALERT, payload: {success: res.data.msg}})
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT, 
            payload: {error: err.response.data.msg}
        })
    }
}
export const getApplicant = () => async (dispatch) => {
   

   

    try {
        
        dispatch({ type: APPLICANT_TYPES.LOADING, payload: true })

       

        const res = await getDataAPI('getReports')

        dispatch({
            type: APPLICANT_TYPES.GET_APPLICANT,
            payload: res.data.applicants
        })

        dispatch({ type: APPLICANT_TYPES.LOADING, payload: false })
    } catch (err) {
        console.log(err)
    }
}

export const updateApplicant = (user) => async (dispatch) => {
   

   

    try {
        
       
        dispatch({type: GLOBALTYPES.ALERT, payload: {loading: true}})
       

        const res = await patchDataAPI(`updateReport/${user._id}`,{done:'yes'})

        dispatch({
            type: APPLICANT_TYPES.UPDATE_APPLICANT,
            payload: res.data.newApplicant
                   
                
            
        })

        dispatch({type: GLOBALTYPES.ALERT, payload: {loading: false}})
    } catch (err) {
        console.log(err)
    }
}


