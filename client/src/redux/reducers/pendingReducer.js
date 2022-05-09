import { DeleteData } from "../actions/globalTypes";
import { PENDING_BIODATAS_TYPES } from "../actions/pendingAction";
const initialState = {
  loading: false,
  pendingBiodatas: []
}

const PendingBiodatas =  (state = initialState, action) => {
    switch (action.type) {
      case PENDING_BIODATAS_TYPES.LOADING:
            return {
                ...state,
                loading: action.payload
            };
      case PENDING_BIODATAS_TYPES.GET_PENDING_BIODATAS:
        return {
          ...state,
          pendingBiodatas: action.payload
         
        };
        case PENDING_BIODATAS_TYPES.APPROVE_PENDING_BIODATAS:
            return {
                ...state,
                pendingBiodatas: DeleteData(state.pendingBiodatas, action.payload._id)
            };
        case PENDING_BIODATAS_TYPES.DECLINE_PENDING_BIODATAS:
            return {
                ...state,
                pendingBiodatas: DeleteData(state.pendingBiodatas, action.payload._id)
            };
        
      
      
      default:
        return state;
    }
  };

  export default PendingBiodatas