import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <div className="container mycontainer">
          <form id="whole-searchbar">
            <div className="row">
              <div className="col-10">
                <input
                  id="city-input"
                  className="searchbar"
                  type="search"
                  placeholder="Change City..."
                />
              </div>
              <div className="col-2">
                <input type="submit" value="Search" className="btn btn-primary w-100" />
              </div>
            </div>
          </form>
          <div className="col-12">
            <button className="btn btn-success w-25" id="current-location-button">
              Current
            </button>
          </div>
          <div className="row">
            <div className="cityBox col">
              <h1 id="city-name"><br /></h1>
              <div>
                <a id="temp"> </a><a href="#" id="celsius" className="active">°C</a>
                <img src="" id="icon" />
              </div>
              <h1 id="time">Formatted Time</h1>
              <ul>
                <li>• <span id="description"></span></li>
                <li>• Humidity: <span id="humidity"></span>%</li>
                <li>• Wind: <span id="wind"></span>km/hr</li>
              </ul>
            </div>
          </div>
          <div className="weather-forecast" id="forecast"></div>
        </div>
        <copyright
          ><a
            href="https://github.com/aandrews31/Weather-app-final-linked"
            target="_blank"
            >Open-source Code</a
          >
          by Matt Delac</copyright
        >
        <script src="src/script.js"></script>
      </body>
  </div>
  );
}

export default App;
