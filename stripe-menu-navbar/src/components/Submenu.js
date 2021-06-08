import React, { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from '../context';

const Submenu = () => {
    const {
        isSubmenuOpen,
        page: { page, links },
        location,
      } = useGlobalContext();
    const container = useRef(null);
    const [cols, setCols] = useState('col-2');

    useEffect(() => {
        setCols('col-2');
        const submenu = container.current;
        const {center, bottom } = location;
        submenu.style.left = `${center}px`;
        submenu.style.top = `${bottom}px`;

        if(links.length === 3){
            setCols('col-3');
        }
        if(links.length > 3){
            setCols('col-4');
        }
    }, [page, location, links]);

    return (
        <aside
            className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
            ref={container}
        >
            <section>
                <h4>{page}</h4>
                <div className={`submenu-center ${cols}`}>
                    {
                        links.map((link, index) => {
                            const {url, icon, label} = link;
                            return (
                                <a key={index} href={url}>
                                    {icon}
                                    {label}
                                </a>
                            );
                        })
                    }
                </div>
            </section>
        </aside>
    );
};

export default Submenu;
