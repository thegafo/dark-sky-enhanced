
const maps = require('@google/maps');

/**
 * geocode - get latitude and longitude coordinates from an address
 *
 * @param  {String} address   the address to geocode
 * @param  {Function} cb      err, result callback
 */
module.exports = (apiKey, address, cb) => {
  client = maps.createClient({key: apiKey});
  client.geocode({address: address}, (err, response) => {
    if (err) return cb(err);
    cb(null, response.json.results[0].geometry.location);
  });
}
