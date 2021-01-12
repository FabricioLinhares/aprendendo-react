import React from 'react'
import Filho from './Filho'

const Pai = props =>
    <div>
        <Filho {...props}><strong>João</strong></Filho>
        <Filho sobrenome={props.sobrenome}><strong>Maria</strong></Filho>
        <Filho sobrenome="Silva"><strong>Pedro</strong></Filho>
    </div>

export default Pai