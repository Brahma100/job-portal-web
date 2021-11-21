import React from 'react';

const SearchBox=(props)=>{
    const {searchText, handleSearch}=props;
    return(
        <div className='search-box-wrapper'>
            <div className='input-wrapper'>
            <input 
            type='text' 
            value={searchText}
            onChange={handleSearch}
            placeholder='Search Candidate By Name/Status'/>
            </div>
        </div>
    )
}
export default SearchBox;