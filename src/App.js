import React from 'react';
import ContactForm from './ContactForm'; // Assurez-vous que le chemin est correct
import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero/Hero.js';
import MyHeader from './components/Header';
import Courses from './components/Courses/Courses.js';

function App() {
  return (
    <div className="App">
      
      <MyHeader />
      <Hero
        title="Improve your skills on your own"
        subtitle="To prepare for a better future"
        buttonText="Register Now"
        buttonLink="/register"
      />
      <Courses />
      <ContactForm />
    </div>
  );
}

export default App;
