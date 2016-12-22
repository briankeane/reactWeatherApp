var React = require('react');

var WeatherMessage = ({cityName, temp}) => {
  var message;

  if (cityName) {
    message = "It is " + temp + " degrees in " + cityName;
  } else {
    message = "";
  }

  return (
    <p className="text-center">{message}</p>
  );
};

module.exports = WeatherMessage;