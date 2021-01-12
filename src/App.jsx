import './App.css'
import React from 'react'

import Card from './components/layout/Card'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalIf from './components/basicos/CondicionalIf'
import Maiusculo from './components/basicos/Maiusculo'
// import MaiusculoFilhos from './components/MaiusculoFilhos.jsx'

const App = () =>
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
                    <li>Daniela</li>
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
        <Card titulo="Maiusculo">
            <Maiusculo frase="Algo escrito aqui" />
        </Card>
        {/* <Card titulo="Maiusculo com filhos">
            <MaiusculoFilhos>
                <div>
                    <p>Frase</p>
                    <span>algo</span>
                </div>
                <div>
                    <p>Frase 2</p>
                </div>
            </MaiusculoFilhos>
        </Card> */}
    </div>

export default App