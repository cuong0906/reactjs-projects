import React from 'react';
import { useGlobalContext } from '../context';
import justImg from '../images/TronTim.jpg';

const Hero = () => {
    const { closeSubmenu } = useGlobalContext();
    return (
        <section className="hero" onMouseOver={closeSubmenu}>
            <div className="hero-center">
                <article className="hero-info">
                    <h2>
                        Lorem ipsum dolor,<br/>  sit amet consectetur adipisicing elit.
                    </h2>
                    <p>
                        Millions of companies of all sizes—from startups to Fortune 500s—use
                        Stripe’s software and APIs to accept payments, send payouts, and
                        manage their businesses online.
                    </p>
                    <button className="btn">
                        Start now!
                    </button>
                </article>
                <article className="hero-images">
                    <img src={justImg} className="phone-img" alt="phone"/>
                </article>
            </div>
        </section>
    );
};

export default Hero;
