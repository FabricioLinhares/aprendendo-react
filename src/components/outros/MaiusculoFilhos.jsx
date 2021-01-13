import React from 'react'

const MaiusculoFilhos = props => {
    return (
        <div style={{
            textTransform: 'uppercase'
        }}>
            {props.children}
        </div>
    )
}

export default MaiusculoFilhos