import React from 'react';
import { useGlobalContext } from '../context';
import Cocktail from './Cocktail';
import Loading from './Loading';

const CocktailList = () => {
    const { loading, cocktails } = useGlobalContext();

    if(loading){
        return(
            <Loading/>
        );
    }
    return (
        <section className="section">
            <h2 className="section-title">cocktails</h2>
            <div className="cocktails-center">
                {
                    cocktails.map((item) => {
                        return (
                            <Cocktail key={item.id} {...item}/>
                        );
                    })
                }
            </div>
        </section>
    );
};

export default CocktailList;
