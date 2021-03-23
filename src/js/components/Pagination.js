import React from 'react'

export default function Pagination({goToPrevPage,goToNextPage}) {
    return (
        <div>
            {goToPrevPage && <button onClick={goToPrevPage}>Prev</button>}
            <button onClick={goToNextPage}>Next</button>
        </div>
    )
}
