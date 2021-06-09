import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

const url ="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [cocktails, setCocktails] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    const fetchDrinks = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch(`${url}${searchTerm}`);
            const data = await res.json();
            
            const {drinks} = data;
            if(drinks){
                const newCocktails = drinks.map((item) =>{
                    const {
                        idDrink, 
                        strDrink, 
                        strDrinkThumb, 
                        strAlcoholic, 
                        strGlass
                    } = item;

                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass,
                    }
                });
                setCocktails(newCocktails);
            }else{
                setCocktails([]);
            }

            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchDrinks();
    },[searchTerm, fetchDrinks])

    return (
        <AppContext.Provider
            value={{
                loading,
                cocktails,
                searchTerm,
                setSearchTerm
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };