import React from 'react';

const Links = ({links, linksRef}) => {
    return (
        <ul className="links" ref={linksRef}>
            {
                links.map((link) => {
                    const {id, url, text} = link;
                    return (
                        <li key={id}>
                            <a href={url}>{text}</a>
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default Links;
