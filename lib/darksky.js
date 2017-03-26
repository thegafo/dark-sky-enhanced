
const request = require('request');

/**
 * getWeather - call Dark Sky API on given coordinates
 *
 * @param  {String}   apiKey  description
 * @param  {String}   type    {current,minutely,hourly,daily}
 * @param  {Object}   loc     location object with two fields: lat, lng
 * @param  {Function} cb      err,result callback
 */
module.exports.getWeather = (apiKey, type, loc, cb) => {
  if (["currently", "minutely", "hourly", "daily"].indexOf(type) < 0) {
    throw Error("Invalid weather type: " + type)
  }
  if (!(lat in loc && lng in loc)) {
    throw Error("Invalid location");
  }
  var url = `https://api.darksky.net/forecast/${apiKey}/${loc.lat},${loc.lng}?exclude=flags`;
  request(url, (err, response, body) => {
    if (err) return cb(err);
    cb(null, JSON.parse(body)[type]);
  });
}
