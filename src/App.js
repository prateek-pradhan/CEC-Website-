import './App.css';
import Navi from './components/Navi.js';
import Footer from './components/Footer.js'
import { Home } from './components/HomePage/Home';
import Brack from './components/Brackets/Brack';

function App() {
  return (
    <div className="App">
      <Navi />
      <div className="bgLogo">
        {/* add components here. */}
        <Brack />
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
