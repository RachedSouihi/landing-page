import * as React from "react";

import "./courses.css"


export default function CourseCard(props) {
  return (
    
    <div class="card course-card">
      <img src={props.image} class="card-img-top"  />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          {props.title}
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
