import React from 'react'

const ReviewEntry = (props) => {
    console.log(props)
    return(
        <>
        Summary
        {JSON.stringify(props.location.state.flightEntry)}
        {props.location.state.flightEntry.DateOfTakeOff}
        </>
    )
}

export default ReviewEntry