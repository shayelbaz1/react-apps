import * as React from 'react'
import { Link } from 'react-router-dom'


export const Fetch = () => {

    const [count, setCount] = useStateL(4,'count')
    const [data, setData] = useStateL('posts','data')
    const [items, setItems] = useStateL([],'items')
    const [windowWidth, setWindowWidth] = useStateL(window.innerWidth,'windowWidth')
    
    const updateWindowWidth = function updateWindowWidth(){
        setWindowWidth(window.innerWidth)
    }

    function useStateL(initialValue, name) {
        const [value, setValue] = React.useState(initialValue);
        React.useDebugValue(`${name}: ${value}`);
        return [value, setValue];
    }

    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${data}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [data])

    React.useEffect(() => {
        window.addEventListener('resize', updateWindowWidth)
        return () => {
            window.removeEventListener('resize', updateWindowWidth)
        }
    }, [])

    return (
        <>
            <div>Window Width: {windowWidth}</div>

            <div>
                <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
                <span>{count}</span>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            </div>

            <br />

            <div>
                <button onClick={() => setData('posts')}>posts</button>
                <button onClick={() => setData('comments')}>comments</button>
                <button onClick={() => setData('users')}>users</button>
            </div>

            <h1>{data}</h1>

            {items.map(item => <pre key={item.id}>{JSON.stringify(item)}</pre>)}
        </>

    )
}