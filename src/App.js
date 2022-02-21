import logo from "./yf-symbol.png";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <h1>Dictionary</h1>
        </header>
        <Dictionary />
        <footer className="App-footer">
          <small>
            This app was coded by{" "}
            <a href="https://quirky-jang-428adc.netlify.app/" target="/blank">
              Yael Fromm
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/Lellien/react-dictionary-project"
              target="/blank"
            >
              open sourced
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
