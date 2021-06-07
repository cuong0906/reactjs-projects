import React from 'react';

const Company = ({item, value, index, handleOnclickComp}) => {
    return (
        <>
            <button className={`job-btn ${index === value && 'active-btn'}`} onClick={handleOnclickComp}>
                {item.company}
            </button>
        </>
    );
};

export default Company;
