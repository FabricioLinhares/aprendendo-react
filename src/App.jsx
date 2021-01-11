import './App.css'
import React from 'react'

import Card from './components/layout/Card'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalIf from './components/CondicionalIf'

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
        <Card titulo="Repetição">
            <Repeticao />
        </Card>
        <Card titulo="Condicional">
            <Condicional numero={9} />
        </Card>
        <Card titulo="Condicional com if">
            <CondicionalIf numero={10} />
        </Card>
    </div>