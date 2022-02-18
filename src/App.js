import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <h1 className="mt-4">Dictionary</h1>
        </header>
        <Dictionary />
        <footer className="App-footer">
          <small>Coded by Yael Fromm</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
