import React from 'react';
import Navbar from './components/navbar/navbar';
import Intro from './components/intro/intro';
import Skills from './components/skills/skills';
import Works from './components/works/works';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
    </div>
  );
}

export default App;
