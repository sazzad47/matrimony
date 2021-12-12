import { getDataAPI } from '../../utils/fetchData'

export const getBiodata = (id) => async (dispatch) => {
    try {
        const res = await getDataAPI(`/biodata/${id}`);
        
        dispatch({type: 'GET_BIODATA', payload: res.data.biodata });
    } catch (error) {
        console.log(error)
    }
}
export const getBiodatas = (page) => async (dispatch) => {
    try {
        dispatch({type: 'START_LOADING'});
        const res = await getDataAPI('biodatas');
        
        dispatch({type: 'GET_BIODATAS', payload: res.data.biodatas });
        dispatch({type: 'END_LOADING'});
    } catch (error) {
        console.log(error)
    }
}
export const getBiodatasBySearch = (userData) => async (dispatch) => {
    const {gender,status,pdistrict,} = userData
    try {
        dispatch({type: 'START_LOADING'});
        const  res= await getDataAPI(`search?gender=${gender}&status=${status}&pdistrict=${pdistrict}`)
        dispatch({type: 'GET_BIODATAS_BYSEARCH', payload: res.data.users});
        dispatch({type: 'END_LOADING'});
    } catch (error) {
        console.log(error);
    }
}