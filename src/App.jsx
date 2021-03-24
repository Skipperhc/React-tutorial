import './App.css'
import React from 'react'

import ComFilhos from './components/basicos/ComFilhos';
import ComParametro from './components/basicos/ComParametro';
import Card from './components/layout/Card';
import Primeiro from './components/basicos/Primeiro';
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';
import Input from './components/form/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';

export default (props) => (
    <div className="App">
        <h1>Fundamentos react</h1>

        <div className="Cards">

            <Card titulo="11° - Mega" color="#6E9ECF">
                <Mega qtdNumeros={8}></Mega>
            </Card>
            <Card titulo="10° - Contador" color="#6E9ECF">
                <Contador passo={1} valor={2}></Contador>
            </Card>
            <Card titulo="9° - Input" color="#FF4C65">
                <Input></Input>
            </Card>
            <Card titulo="8° - Comunicacao indireta" color="#000">
                <Super></Super>
            </Card>
            <Card titulo="7° - Comunicacao Direta" color="#FDF200">
                <Pai sobrenome="Cardoso"></Pai>
            </Card>
            <Card titulo="6° - Condicional V2" color="#69D2E7">
                <CondicionalComIf numero={10}></CondicionalComIf>
            </Card>
            <Card titulo="5° - Condicional V1" color="#A7DBDB">
                <Condicional numero={11}></Condicional>
            </Card>
            <Card titulo="4° - Repetição" color="#542733">
                <Repeticao></Repeticao>
            </Card>
            <Card titulo="3° - Componente com filhos" color="#F38630">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Vitor</li>
                        <li>Jão</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="2° - Componente com parametro" color="#FA6900">
                <ComParametro titulo="titulo do segundo componente" subtitulo="subtitulo do segundo componente" />
            </Card>
            <Card titulo="1° - Primeiro componente" color="#E94C6F">
                <Primeiro />
            </Card>
        </div>
    </div>
)