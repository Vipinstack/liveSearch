import React, { useState } from 'react'
import '../App.css';
import Rsearch from './Rsearch';

function Search() {

    const [img, setImg] = useState('');

   const inputEvent = (event) =>{
        const data = event.target.value;
        console.log(data);
        setImg(data);   
   } 

    return (
        <div className="input-type">
            <input type='text' 
            placeholder='Search Anything' 
            value={img}                        
            onChange={inputEvent}/>
            <Rsearch name={img} />
        </div>
        
    )
}

export default Search
