// src/components/Hero/Hero.js
import React from 'react';
import './Hero.css';

export default function Hero({title, subtitle, buttonText, buttonLink }){
  return (
    <div className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <a href={buttonLink} className="hero-button">
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

