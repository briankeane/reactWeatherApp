var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=943df072262c404630bfe1699920bb62&units=imperial';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    return new Promise(function (resolve, reject) {
      var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

      axios.get(requestUrl)
      .then(function (res) {
        if (res.data.cod && res.data.message) {
          reject(res.data.message);
        } else {
          resolve(res.data.main.temp);
        }
      }, function (res) {
        reject(res.message);
      });
    });
  }
}