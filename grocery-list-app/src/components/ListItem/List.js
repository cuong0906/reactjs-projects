import React from 'react'
import Items from './Items'

const List = ({list, removeItem, editItem}) => {
    return (
        <div className="grocery-list">
            {
                list.map((item) => (
                    <Items
                        key={item.id}
                        {...item}
                        removeItem={removeItem}
                        editItem={editItem}
                    />
                ))
            }
        </div>
    );
};

export default List;
