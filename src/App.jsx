import './App.css'
import React from 'react'

import ComFilhos from './components/basicos/ComFilhos';
import ComParametro from './components/basicos/ComParametro';
import Card from './components/layout/Card';
import Primeiro from './components/basicos/Primeiro';
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';


export default function App(props) {
    return <div className="App">
        <Card titulo="6° - Condicional V2">
            <CondicionalComIf numero={10}></CondicionalComIf>
        </Card>
        <Card titulo="5° - Condicional V1">
            <Condicional numero={11}></Condicional>
        </Card>
        <Card titulo="4° - Repetição">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="3° - Componente com filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Vitor</li>
                    <li>Jão</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="2° - Componente com parametro">
            <ComParametro titulo="titulo do segundo componente" subtitulo="subtitulo do segundo componente" />
        </Card>
        <Card titulo="1° - Primeiro componente">
            <Primeiro />
        </Card>
    </div>
}