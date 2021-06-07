import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const JobDesc = ({duty}) => {
    return (
        <>
            <div className="job-desc">
                <FaAngleDoubleRight className="job-icon"/>
                <p>{duty}</p>
            </div>
        </>
    );
};

export default JobDesc;