import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Minneapolis" />
        <footer>
          This project was created by{" "}
          <a
            href="https://www.shecodes.io/graduates/122224-kristi-boverhuis"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Krist Boverhuis
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/kboverhuis/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}


