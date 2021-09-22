import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <p>
          Bienvenidos al E-commerce de BRANDS FOR LIFE
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ingresa y conoce nuestros productos
        </a>
      </header>
    </div>
  );
}

export default App;
