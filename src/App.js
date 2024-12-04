import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was created by{" "}
          <a
            href="https://www.shecodes.io/graduates/122224-kristi-boverhuis"
            target="_blank"
          >
            {" "}
            Krist Boverhuis
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/kboverhuis/react-weather-app"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}


