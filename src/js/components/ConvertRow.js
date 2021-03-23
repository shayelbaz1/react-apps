import React from 'react'

export default function ConvertRow({ratesOptions}) {

    return (
        <>
            <input type="number"></input>
            <select>
                <option value={ratesOptions}>{ratesOptions}</option>
            </select>
        </>
    )
}
