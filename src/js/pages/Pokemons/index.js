import React, { useState, useEffect } from 'react'
import axios from 'axios'

import PokemonItem from '../../components/PokemonItem'
import Pagination from '../../components/Pagination'

export default function Pokemons() {
    const [pokemons, setPokemons] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPage, setNextPage] = useStateL('', 'nextPage')
    const [prevPage, setPrevPage] = useStateL('', 'prevPage')
    const [loading, setloading] = useStateL(true,'loading')
    
    function useStateL(initialValue, name) {
        const [value, setValue] = React.useState(initialValue);
        React.useDebugValue(`${name}: ${value}`);
        return [value, setValue];
    }

    useEffect(() => {
        setloading(true)
        let cancel
        axios.get(currentPageUrl, { cancelToken: new axios.CancelToken(c => cancel = c) }).then(res => {
            setloading(false)
            setNextPage(res.data.next)
            setPrevPage(res.data.previous)
            setPokemons(res.data.results)
        })
        return () => {
            cancel()
        }
    }, [currentPageUrl])

    function goToNextPage() {
        setCurrentPageUrl(nextPage)
    }
    function goToPrevPage() {
        setCurrentPageUrl(prevPage)
    }

    if(loading) return 'Loading...'
    return (
        <>
            {pokemons.map(pokemon =>
                <PokemonItem key={pokemon.name} pokemon={pokemon} />
            )}
            <Pagination goToPrevPage={prevPage ? goToPrevPage : null} goToNextPage={nextPage ? goToNextPage : null} />
        </>
    )
}
