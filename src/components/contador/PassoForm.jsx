import React from 'react'

export default (props) => {
    return (
        <div>
            <label htmlFor="pasoInput">passo:</label>
            <input id="pasoInput" type="text" value={props.passo}
                onChange={(e) => props.onPassoChange(+e.target.value)} />
        </div>);
}