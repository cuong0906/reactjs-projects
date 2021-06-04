import React, { useState } from 'react';

const Tour = ({id, image, info, name, price, removeTour}) => {
    const [readMore, setReadMore] = useState(false);

    return (
        <article className="single-tour">
            <img src={image} atl={name}/>
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                <p>
                    {readMore ? info : `${info.substring(0,200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'Show less' : 'Read More'}
                    </button>
                </p>
                <button className="delete-btn" onClick={() => removeTour(id)}>
                    Not interested
                </button>
            </footer>
        </article>
    );
};

export default Tour;
