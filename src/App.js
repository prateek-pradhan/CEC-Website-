import './App.css';
import Navi from './components/Navi.js';
import Footer from './components/Footer.js'
import Brack from './components/Brackets/Brack.js';

function App() {
  return (
    <div className="App">
      <Navi />
      <div className="bgLogo">
         {/* add components here. */}
        <Brack />
      </div>
      <Footer />
    </div>
  );
}

export default App;
