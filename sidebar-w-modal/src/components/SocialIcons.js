import React from 'react';

const SocialIcons = ({ social }) => {
    return (
        <ul className="social-icons">
            {
                social.map((link) => {
                    const { id, url, icon } = link;
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

export default SocialIcons;
