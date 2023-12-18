import { useState } from "react";

const Weatherapp = () => {
  //defining the var to store the data entered by the user
  const [location, setLocation] = useState("");

  //storing the object of weather api
  const [weatherData, setWeatherData] = useState({
    name: "",
  });

  // this event is being handled by button: line : 47
  const searchHandle = (event) => {
    event.preventDefault();

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=` +
        location +
        `&appid=e66c42734b3c641feb993d197d71838c`
    )
      .then((data) => data.json())
      .then(function (data) {
        setWeatherData({
          name: data.name,
        });
      });
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <h3 id="bhoki" className="mb-4 pb-2 fw-normal">
              Check the weather forecast
            </h3>

            {/* Search location */}
            <div className="input-group rounded mb-3">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Enter City"
                aria-label="Search"
                aria-describedby="search-addon"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <button
                onClick={searchHandle}
                type="button"
                className="btn btn-outline-secondary"
              >
                Check!
              </button>
            </div>

            {/* Button to change between celcius and farenheit */}
            <div className="mb-4 pb-2">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                  checked
                />
                <label className="form-check-label" for="inlineRadio1">
                  Celsius
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" for="inlineRadio2">
                  Farenheit
                </label>
              </div>
            </div>

            <div className="card shadow-0 border">
              <div className="card-body p-4">
                <h4 className="mb-1 sfw-normal"> {weatherData.name} </h4>
                <p className="mb-2">
                  Current temperature: <strong>5.42°C</strong>
                </p>

                <p>
                  Feels like: <strong>4.37°C</strong>
                </p>

                <p>
                  Max: <strong>6.11°C</strong>, Min: <strong>3.89°C</strong>
                </p>

                {/* Cloud design */}
                {/* <div className="d-flex flex-row align-items-center">
                  <p className="mb-0 me-4">Scattered Clouds</p>
                  <i
                    className="fas fa-cloud fa-3x"
                    style={{ color: "#eee" }}
                  ></i>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weatherapp;
