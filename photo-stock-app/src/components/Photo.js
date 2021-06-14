import React from 'react';

const Photo = ({
    alt_description,
    instagram_username,
    urls: {regular},
    user: {
        name,
        portfolio_url,
        profile_image: { medium },
    },
    links: { likes },
}) => {
    return (
        <article className="photo">
            <img src={regular} alt={alt_description}/>
            <div className="photo-info">
                <div>
                    <h4>{name}</h4>
                    <p>{likes}</p>
                </div>
                <a href={portfolio_url}>
                    <img src={medium} className="user-img" alt={instagram_username}/>
                </a>
            </div>
        </article>
    );
};

export default Photo;
