import './index.css'
import './components/Navbar.tsx'
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
    </div>
  );
};

export default App;