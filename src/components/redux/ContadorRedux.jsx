import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const ContadorRedux = ({ increment, decrement }) => {
    const counter = useSelector((state) => state)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => dispatch({ type: 'DECREMENT'})}>-</button>
            <button onClick={() => dispatch({ type: 'INCREMENT'})}>+</button>
        </div>
    )
}

export default ContadorRedux