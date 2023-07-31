import React from 'react';

const SearchBox= ({searchchange}) =>{
    return(
        <div className='pa3'>
        <input 
        className='pa3 ba b--green bg-lightest-blue'
        type = "search"
        onChange = {searchchange}
        placeholder = 'Search Robots'/>
        </div>
    )
};
export default SearchBox;