import React from 'react';

const SocialIcon = ({social}) => {
    return (
        <ul className="social-icons"> 
            {
                social.map((item) => {
                    const {id, url, icon} = item;
                    return (
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default SocialIcon;
