import * as React from "react";
import Card from "@mui/material/Card";

import "./courses.css"
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
