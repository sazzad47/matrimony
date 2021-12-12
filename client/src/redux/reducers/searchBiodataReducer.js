


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
      
      default:
        return state;
    }
  };

  export default Biodatas