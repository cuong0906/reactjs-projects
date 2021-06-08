import React from 'react';

const Links = ({ links }) => {
    return (
        <ul className="links">
            {
                links.map((link) => {
                    const { id, url, text, icon } = link;
                    return (
                        <li key={id}>
                            <a href={url}>
                                {icon}
                                {text}
                            </a>
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default Links;
