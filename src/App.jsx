import './App.css'
import React from 'react'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'

export default () =>
    <div className="App">
        <Card titulo="Primeiro Componente">
            <Primeiro />
        </Card>
        <Card titulo="Componente com Parâmetro">
            <ComParametro titulo="Título aqui"
                subtitulo="Algo aqui" />
        </Card>
        <Card titulo="Componente com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Maria</li>
                    <li>Daniel</li>
                    <li>Rodrigo</li>
                    <li>Carlos</li>
                </ul>
            </ComFilhos>
        </Card>
    </div>