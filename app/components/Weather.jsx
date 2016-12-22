var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return { isLoading: false };
  },
  handleUpdateValues: function (values) {
    var self = this;

    self.setState({ isLoading: true });

    openWeatherMap.getTemp(values.cityName)
    .then(function (temp) {
      self.setState({ 
                      cityName: values.cityName,
                      temp: temp,
                      isLoading: false
                    });
    }, function (errMessage) {
      self.setState({ isLoading: false });
      alert(errMessage);
    });
  },
  render: function () {
    var cityName = this.state.cityName;
    var temp = this.state.temp;
    var isLoading = this.state.isLoading;

    function renderMessage() {
      if (isLoading) {
        return (<h3 className="text-center">Fetching Weather...</h3>);
      } else if (temp && location) {
        return (<WeatherMessage cityName={cityName} temp={temp} />);
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onUpdateValues={this.handleUpdateValues}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;