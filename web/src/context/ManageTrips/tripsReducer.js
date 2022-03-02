const TripsReducer = (state, action) => {
    switch (action.type) {
      case "USER_GET_TRIPS_SUCCESS":
        return {
          ...state,
          trips: action.payload,
        }
      default:
        return state
    }
  }
  
  export default TripsReducer