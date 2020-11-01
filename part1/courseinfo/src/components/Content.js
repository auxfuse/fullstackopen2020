import React from 'react';
import Part from './Part'

const Content = (props) => {

    return (
        <>
            <Part part={props.course_details[0].part} exercise={props.course_details[0].exercise}/>
            <Part part={props.course_details[1].part} exercise={props.course_details[1].exercise}/>
            <Part part={props.course_details[2].part} exercise={props.course_details[2].exercise}/>
        </>
    );
};

export default Content