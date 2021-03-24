import React, { useState } from 'react'
import Sub from './Sub'


export default props => {

    const [num, setNum] = useState(0)

    function quandoClicar(valorGerado) {
        setNum(valorGerado)
        console.log('ação!!!')
        console.log(valorGerado)
    }

    return (
        <div>
            <h4>Valor: {num}</h4>
            <Sub onClicar={quandoClicar}>Pedro</Sub>
        </div>
    )
}