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

import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'

import Input from './components/form/Input'

import Contador from './components/contador/Contador'

const App = () =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="Primeiro Componente" cor="#85C4B9">
                <Primeiro />
            </Card>
            <Card titulo="Componente com Parâmetro" cor="#F2E394">
                <ComParametro titulo="Título aqui"
                    subtitulo="Algo aqui" />
            </Card>
            <Card titulo="Componente com Filhos" cor="#F2AE72">
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
            <Card titulo="Repetição" cor="#E8B71A">
                <Repeticao />
            </Card>
            <Card titulo="Condicional" cor="#1FDA9A">
                <Condicional numero={9} />
            </Card>
            <Card titulo="Condicional com if" cor="#5A6A62">
                <CondicionalIf numero={10} />
            </Card>
            <Card titulo="Maiusculo" cor="#FA6900">
                <Maiusculo frase="Algo escrito aqui" />
            </Card>
            <Card titulo="Comunicação direta" cor="#F2AE72">
                <Pai sobrenome="Freitas"></Pai>
            </Card>
            <Card titulo="Comunicação indireta">
                <Super></Super>
            </Card>
            <Card titulo="Input" cor="#D96459">
                <Input></Input>
            </Card>
            <Card titulo="Contador" cor="#008BBA">
                <Contador passo={10} valor={100}></Contador>
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
        
    </div>

export default App