import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <article className="question" onClick={() => setShowInfo(!showInfo)}>
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={() => setShowInfo(!showInfo)}>
                    {
                        showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>
                    }
                </button>
            </header>
            {/* {
                showInfo && <p>{info}</p>
            } */}
            <div className="accordion-content" aria-expanded={!showInfo}>
                {info}
            </div>
        </article>
    );
};

export default Question;