import React from 'react'
import { useDispatch } from 'react-redux'
import { bandRemoved } from './bandsSlice'

const Band = ({band}) => {
    const dispatch = useDispatch()

    function deleteBand() {
        dispatch(bandRemoved(band.id))
    }
    return (
        <div>
            <h1>{band.name}</h1>
            <button onClick={deleteBand}>Delete Band</button>
        </div>
    )
}

export default Band
