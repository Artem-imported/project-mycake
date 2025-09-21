import './App.css';
import CakesBlock from './components/Cakes';
import Deserts from './components/Deserts';
import Header from './components/Header';
import CapCakesBlock from './components/Capcakes';
import Registration from './components/Registration';
import Best from './components/Best';
import Articles from './components/Articles';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Deserts />
        <CakesBlock />
        <CapCakesBlock />
        <Registration />
        <Best />
        <Articles />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;