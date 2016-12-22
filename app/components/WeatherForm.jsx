var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var cityName = this.refs.cityName.value;

    if (cityName.length)
    {
      this.refs.cityName.value = '';
      this.props.onUpdateValues({ cityName: cityName });
    }
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="search" ref="cityName" placeholder="Enter city name" />
        <button className="button expanded hollow">Get Weather</button>
      </form>
      );
  }
});

module.exports = WeatherForm;