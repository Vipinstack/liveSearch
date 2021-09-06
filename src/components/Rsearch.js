import React from 'react'

function Rsearch(props) {

    const url = `https://source.unsplash.com/400x500/?${props.name}`;
    return (
        <div className="new-img">
            <img src={url} alt='search' />
        </div>
    )
}

export default Rsearch;
