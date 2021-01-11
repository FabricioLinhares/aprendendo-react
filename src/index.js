import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro titulo="Título aqui"
            subtitulo="Algo aqui" />
    </div>
    ,
    document.getElementById('root')
)