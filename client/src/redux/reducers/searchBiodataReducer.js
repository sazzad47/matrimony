import { DeleteData } from "../actions/globalTypes";
import { PENDING_BIODATAS_TYPES } from "../actions/pendingAction";


const Biodatas =  (state = { isLoading: true, biodatas: [] }, action) => {
    switch (action.type) {
      case 'GET_BIODATAS':
        return {
          ...state,
          biodatas: action.payload
          
        };
      case 'START_LOADING':
        return {
          ...state,
          isLoading: true
          
        };
      case 'END_LOADING':
        return {
          ...state,
          isLoading: false
          
        };
      
     
      case 'GET_BIODATAS_BYSEARCH':
        return { ...state, biodatas: action.payload};
      
      case 'GET_BIODATAS_BY_NUMBER':
        return { ...state, biodatas: action.payload};
      
      case 'GET_BIODATAS_BY_ADMIN':
        return { ...state, biodatas: action.payload};
        
      case PENDING_BIODATAS_TYPES.HIDE_BIODATA:
          return {
              ...state,
              biodatas: DeleteData(state.biodatas, action.payload._id)
          };
      case PENDING_BIODATAS_TYPES.DELETE_BIODATA:
          return {
              ...state,
              biodatas: DeleteData(state.biodatas, action.payload._id)
          };
        
      
      default:
        return state;
    }
  };

  export default Biodatas