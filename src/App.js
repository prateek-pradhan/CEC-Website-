import './App.css';
import Navi from './components/Navi.js';
import Footer from './components/Footer.js'
import {Home} from './components/HomePage/Home';

function App() {
  return (
    <div className="App">
      <Navi />
      <div className="bgLogo">
         {/* add components here. */}
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
