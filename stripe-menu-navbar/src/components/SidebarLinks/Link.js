import React from 'react';

const Link = ({ links }) => {
    return (
        <div className="sidebar-sublinks">
            {
                links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                        <a key={index} href={url}>
                            {icon}
                            {label}
                        </a>
                    );
                })
            }
        </div>
    );
};

export default Link;
