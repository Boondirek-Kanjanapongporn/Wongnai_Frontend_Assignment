import React, { useReducer } from 'react'
import TripsReducer from './tripsReducer'
import TripsContext from './tripsContext'

const TripsState = (props) => {
    const initialState = {
        trips: null,
    };
    const [state, dispatch] = useReducer(TripsReducer, initialState);
    const baseURL = 'http://localhost:8080';

    const getTrips = async ({ keyword }) => {
        try{
            await fetch(`${baseURL}/api/trips?keyword=${keyword}`)
                .then(response => response.json())
                .then(data => {
                    dispatch({
                        type: "USER_GET_TRIPS_SUCCESS",
                        payload: data,
                    })
                })
                .catch(err => {
                    dispatch({
                        type: "USER_GET_TRIPS_FAIL",
                        payload: err,
                    })
                });
        } catch (err) {
            dispatch({
                type: "USER_GET_TRIPS_FAIL",
                payload: err,
            })
        }
    }

    return (
        <TripsContext.Provider
          value={{
            trips: state.trips,
            getTrips,
          }}
        >
          {props.children}
        </TripsContext.Provider>
    )
}

export default TripsState