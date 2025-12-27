import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <FeaturedProjects />
      <Timeline />
      <Skills />
    </div>
  );
}

export default App;
