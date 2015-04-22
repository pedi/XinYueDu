/**
 * Created by mohist on 2/26/15.
 */
var moment = require('moment');
module.exports = function(date) {
    return moment(date).format('YYYY MMMM DD');
}