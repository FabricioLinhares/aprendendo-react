import './Card.css'
import React from 'react'

const Card = props =>
    <div className="Card" style={{
        borderColor: props.cor || 'black'
    }}>
        <div className="Content">
            {props.children}
        </div>
        <div className="Footer" style={{
            backgroundColor: props.cor || 'black'
        }}>
            {props.titulo}
        </div>
    </div>

export default Card