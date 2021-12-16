import { APPLICANT_TYPES } from '../actions/reportAction'
import { DeleteData, EditData } from '../actions/globalTypes';
const initialState = {
    loading: false,
    applicants: []
}


const ReportReducer = (state = initialState, action) => {
    switch (action.type){
        case APPLICANT_TYPES.LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case APPLICANT_TYPES.CREATE_APPLICANT:
            return {
                ...state,
                applicants: action.payload
            };
        case APPLICANT_TYPES.GET_APPLICANT:
            return {
                ...state,
                applicants: action.payload
            };
        case APPLICANT_TYPES.UPDATE_APPLICANT:
            return {
                ...state,
                applicants: DeleteData(state.applicants, action.payload._id)
            };
        default:
            return state;
    }
}

export default ReportReducer
