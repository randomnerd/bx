Meteor.startup(function() {

  if (BitIndexIndicator_BTTC.find().count() !== 0) {
     return;
  }

  if (BitIndexIndicator_BTTN.find().count() !== 0) {
     return;
  }


  if (BitIndexIndicator_BTUA.find().count() !== 0) {
     return;
  }


  BitIndexIndicator_BTTC._ensureIndex({
  timestamp: 1
  });

  var root_url = process.env.ROOT_URL;

  console.log('no totalBitcoins data found, importing...');
  HTTP.get(root_url + 'total_bitcoin_circulation.json', function(err, resp) {
    var item, lastValue, point, _i, _len, _ref;
    lastValue = 0;
    _ref = resp.data.values;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      point = _ref[_i];
      item = {
        // time: moment(point.x).format("DD/MM/YYYY"),

        date: new Date(point.x * 1000),
        def: point.y,
        close: point.y - lastValue

      };
      BitIndexIndicator_BTTC.insert(item);
      lastValue = point.y;
    }
    console.log('imported ' + BitIndexIndicator_BTTC.find().count() + ' records of totalBitcoins');
    BitIndexIndicator_BTTC._ensureIndex;

    return {
      timestamp: 1
    };

 });

     BitIndexIndicator_BTTN._ensureIndex({
     timestamp: 1
     });

     console.log('no totalTransactions data found, importing...');
     HTTP.get(root_url + 'total_number_transactions.json', function(err, resp) {
       var item, lastValue, point, _i, _len, _ref;
       lastValue = 0;
       _ref = resp.data.values;
       for (_i = 0, _len = _ref.length; _i < _len; _i++) {
         point = _ref[_i];
         item = {
           // time: moment(point.x).format("DD/MM/YYYY"),

           date: new Date(point.x * 1000),
           def: point.y,
           // default: point.y,
           close: point.y - lastValue

         };
         BitIndexIndicator_BTTN.insert(item);
         lastValue = point.y;
       }
       console.log('imported ' + BitIndexIndicator_BTTN.find().count() + ' records of totalTransactions');
       BitIndexIndicator_BTTN._ensureIndex;

       return {
         timestamp: 1
       };
    });

    BitIndexIndicator_BTUA._ensureIndex({
    timestamp: 1
    });

    console.log('no total_number_unique_addresses data found, importing...');
    HTTP.get(root_url + 'total_number_unique_addresses.json', function(err, resp) {
      var item, lastValue, point, _i, _len, _ref;
      lastValue = 0;
      _ref = resp.data.values;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        point = _ref[_i];
        item = {
          // time: moment(point.x).format("DD/MM/YYYY"),

          date: new Date(point.x * 1000),
          def: point.y,
          // default: point.y,
          close: point.y - lastValue

        };
        BitIndexIndicator_BTUA.insert(item);
        lastValue = point.y;
      }
      console.log('imported ' + BitIndexIndicator_BTUA.find().count() + ' records of total_number_unique_addresses');
      BitIndexIndicator_BTUA._ensureIndex;

      return {
        timestamp: 1
      };
   });

  });
