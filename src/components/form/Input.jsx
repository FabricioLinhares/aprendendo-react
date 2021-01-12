import React from 'react'

const Input = props => {
    let nome = 'Pedro'

    return (
        <>
            <input type="text" value={nome}></input>
        </>
    )
}

export default Input