import logo from "./yf-symbol.png";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <a href="#portfolio-link">
            <img src={logo} className="App-logo img-fluid" alt="logo" />
          </a>
          <h1>Dictionary</h1>
        </header>
        <Dictionary />
        <footer className="App-footer">
          <small>
            This app was coded by{" "}
            <a
              id="portfolio-link"
              href="https://peaceful-hugle-11a384.netlify.app/work"
              target="/blank"
            >
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
