import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

const App = () => {
    const course = 'Half Stack application development';
    const course_details = [
        {
            "part": "Fundamentals of React",
            "exercise": 10
        },
        {
            "part": "Using props to pass data",
            "exercise": 7
        },
        {
            "part": "State of a component",
            "exercise": 14
        }
    ]

    return (
        <>
            <Header course={course}/>
            <Content course_details={course_details}/>
            <Total course_details={course_details}/>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));