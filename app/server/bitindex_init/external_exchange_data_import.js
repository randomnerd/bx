import d3 from 'd3';
import {
  BitIndexIndicator_BTPR
}
from 'collections';

Meteor.startup(function() {

  if (BitIndexIndicator_BTPR.find().count() !== 0) {
    return;
  }

  var arrayMax = function(arr) {
    var len, max;
    len = arr.length;
    max = -Infinity;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
  };

  BitIndexIndicator_BTPR._ensureIndex({
    timestamp: 1
  });
  var root_url = process.env.ROOT_URL || 'http://localhost:3000/';

  var parseDate = d3.time.format("%Y-%m-%d").parse;
  console.log('no BitIndexIndicator_BTPR data found, importing...');
  HTTP.get(root_url + 'BITSTAMPUSDcopy.json', function(err, resp) {
    var crash_array, first_value, item, lastValue, max_elem, maximum_crash_array, point, _i, _len, _ref;


    crash_array = [];
    maximum_crash_array = [];
    lastValue = 0;
    max_elem = 0;
    first_value = 0.0769;
    _ref = resp.data.data;

    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      point = _ref[_i];

      crash_array.push(point[4]);
      max_elem = arrayMax(crash_array);

      if (max_elem !== point[4]) {
        maximum_crash_array.push(max_elem);
      }
      item = {

        date: new Date(parseDate(point[0]).getTime()),
        open: point[1],
        high: point[2],
        low: point[3],
        close: point[4],
        volume: point[5],
        crash: point[4] / maximum_crash_array[maximum_crash_array.length - 1]

      };
      BitIndexIndicator_BTPR.insert(item);
      // console.log(item.crash);

    }
    console.log('imported ' + BitIndexIndicator_BTPR.find().count() + ' records of BitIndexIndicator_BTPR');
    BitIndexIndicator_BTPR._ensureIndex;

    return {
      timestamp: 1
    };
  });

});
