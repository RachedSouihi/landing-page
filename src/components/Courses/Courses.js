import React, { useState, useEffect } from 'react';
import CourseCard from './CourseCard';
import "./courses.css"
import { Container } from '@mui/material';

export default function Courses() {
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        setCourses( [
            {
              "id": 1,
              "title": "Spring Boot / Angular",
              "price": "350 DT/Month",
              "image": "/assets/images/node-react.png"
            },
            {
              "id": 2,
              "title": "Node JS / React",
              "price": "350 DT/Month",
              "image": "/assets/images/node-react.png"
            },{
                "id": 3,
                "title": "Spring Boot / Angular",
                "price": "350 DT/Month",
                "image": "/assets/images/node-react.png"
              },
              {
                "id": 4,
                "title": "Node JS / React",
                "price": "350 DT/Month",
                "image": "/assets/images/node-react.png"
              }
          ])
    }, [])





  return (
    <div className="container-md-10">

        <div className='row mx-auto justify-content-center'>
            {courses.map((course) => (
                <div className='col-4'>
                    <CourseCard key={course.id} {...course} />
                </div>
            ))}

      </div>

    </div>
  );
};

