import React, { useState, useEffect } from 'react'
import ConvertRow from '../../components/ConvertRow'

export default function converter() {
    const [fromInput, setfromInput] = useStateL(1, 'fromInput')
    const [toInput, setToInput] = useStateL(1, 'toInput')
    const [ratesOptions, setRatesOptions] = useStateL([], 'ratesOptions')

    const BASE_URL = 'https://api.exchangeratesapi.io/latest'
    useEffect(() => {
        
        fetch(BASE_URL)
            .then(response => response.json())
            .then(data => setRatesOptions([data.base,...Object.keys(data.rates)]))

        return () => {
        }
    }, [])

    function useStateL(initialValue, name) {
        const [value, setValue] = React.useState(initialValue);
        React.useDebugValue(`${name}: ${value}`);
        return [value, setValue];
    }

    return (
        <div>
            <h1>Converter</h1>
            <ConvertRow ratesOptions={ratesOptions} />
            <p>=</p>
            <ConvertRow ratesOptions={ratesOptions}/>
        </div>
    )
}
