var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function () {
    return { isLoading: false };
  },
  handleUpdateValues: function (values) {
    var self = this;

    self.setState({ isLoading: true,
                    errorMessage: undefined });

    openWeatherMap.getTemp(values.cityName)
    .then(function (temp) {
      self.setState({ 
                      cityName: values.cityName,
                      temp: temp,
                      isLoading: false
                    });
    }, function (errMessage) {
      self.setState({ isLoading: false,
                      errorMessage: errMessage });
    });
  },
  render: function () {
    var cityName = this.state.cityName;
    var temp = this.state.temp;
    var isLoading = this.state.isLoading;
    var errorMessage = this.state.errorMessage;

    function renderMessage() {
      if (isLoading) {
        return (<h3 className="text-center">Fetching Weather...</h3>);
      } else if (temp && location) {
        return (<WeatherMessage cityName={cityName} temp={temp} />);
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
            <ErrorModal message={errorMessage} />
          );
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onUpdateValues={this.handleUpdateValues}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;