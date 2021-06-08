import React from 'react';
import Link from './Link';

const Sublinks = ({ sublinks}) => {
    return (
        <div className="sidebar-links">
            {
                sublinks.map((item, index) => {
                    const { links, page } = item;
                    return(
                        <div key={index}>
                            <article key={index}>
                                <h4>{page}</h4>
                            </article>
                            <Link links={links}/>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Sublinks;
