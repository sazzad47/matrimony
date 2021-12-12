import { DeleteData } from "../actions/globalTypes";



const PendingBiodatas =  (state = { isLoading: true, pendingBiodatas: [] }, action) => {
    switch (action.type) {
      
      case 'GET_PENDING_BIODATAS':
        return {
          ...state,
          pendingBiodatas: action.payload
         
        };
        case 'APPROVE_PENDING':
            return {
                ...state,
                pendingBiodatas: DeleteData(state.pendingBiodatas, action.payload._id)
            };
        case 'DECLINE_PENDING':
            return {
                ...state,
                pendingBiodatas: DeleteData(state.pendingBiodatas, action.payload._id)
            };
      
      
      default:
        return state;
    }
  };

  export default PendingBiodatas