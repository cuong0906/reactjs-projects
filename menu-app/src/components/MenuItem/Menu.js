import React from 'react';
import Items from './Items';

const Menu = ({ menuItems }) => {
    return (
        <div className="section-center">
            {
                menuItems.map((item) => (
                    <Items 
                        key={item.id}
                        {...item}
                    />
                ))
            }
        </div>
    );
};

export default Menu;