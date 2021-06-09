import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext();
    const searchVal = useRef('');

    const handleSubmit = (e) =>{
        e.preventDefault();
    };

    const searchCocktail = () => {
        setSearchTerm(searchVal.current.value);
    };

    useEffect(() => {
        searchVal.current.focus();
    },[])

    return (
        <section className="section search">
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">search cocktail</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name"
                        ref={searchVal}
                        onChange={searchCocktail}
                    />
                </div>
            </form>
        </section>
    );
};

export default SearchForm;
