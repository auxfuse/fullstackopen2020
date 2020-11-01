import React from 'react';

const Total = (props) => {
    return (
        <>
            <p>Number of exercises {props.course_details[0].exercise + props.course_details[1].exercise + props.course_details[2].exercise}</p>
        </>
    );
};

export default Total