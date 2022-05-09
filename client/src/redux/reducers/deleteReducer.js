import { APPLICANT_TYPES } from '../actions/deleteAction'
import { DeleteData, EditData } from '../actions/globalTypes';
const initialState = {
    loading: false,
    deleteRequests: []
}


const DeleteReducer = (state = initialState, action) => {
    switch (action.type){
        case APPLICANT_TYPES.LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case APPLICANT_TYPES.CREATE_APPLICANT:
            return {
                ...state,
                deleteRequests: action.payload
            };
        case APPLICANT_TYPES.GET_APPLICANT:
            return {
                ...state,
                deleteRequests: action.payload
            };
        case APPLICANT_TYPES.UPDATE_APPLICANT:
            return {
                ...state,
                deleteRequests: DeleteData(state.deleteRequests, action.payload._id)
            };
        default:
            return state;
    }
}

export default DeleteReducer
