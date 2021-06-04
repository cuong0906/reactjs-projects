import React from 'react';
import People from './People';

const List = ({people}) => {
    return (
        <>
            {
                people.map((person) => (
                    <People key={person.id} 
                        name={person.name} 
                        age={person.age} 
                        image={person.image}
                    />
                ))
            }
        </>
    );
};

export default List;