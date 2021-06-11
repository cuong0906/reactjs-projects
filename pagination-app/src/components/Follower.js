import React from 'react';

const Follower = ({ avatar_url, login, html_url}) => {
    return (
        <article className="card">
            <img src={avatar_url}/>
            <h4>{login}</h4>
            <a className="btn" href={html_url}>
                view profile
            </a>
        </article>
    );
};

export default Follower;
