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
        <div>
          <input type="text" ref="cityName" placeholder="Enter city name" />
        </div>
        <div>
          <button>Get Weather</button>
        </div>
      </form>
      );
  }
});

module.exports = WeatherForm;