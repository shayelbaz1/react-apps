import React from 'react'

export default function PokemonItem({pokemon}) {
    return (
        <div>
            {pokemon.url.slice(-4,-1)+" "+ pokemon.name}
        </div>
    )
}
