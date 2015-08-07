Meteor.methods({

	currrency_add: function(cur){
		//doc, doc_number, movement
		nom.prices=Array(price);
		Currencies.insert(nom, function (err,id) {
			if (!err) {
				return false
			}else{
				return err
			}
		});
	},
	currrency_update: function(id,cur){
		Currencies.update(id,{$set:cur}, function (err) {
			if (!err) {
				return false
			}else{
				return err
			}
		});
	},


	currrency_remove: function(id){
		Currencies.remove(id, function (err) {
			if (!err) {
				return false
			}else{
				return err
			}
		});
	},


  traidpair_add: function(cur){
    //doc, doc_number, movement
    nom.prices=Array(price);
    TradePairs.insert(nom, function (err,id) {
      if (!err) {
        return false
      }else{
        return err
      }
    });
  },
  traidpair_update: function(id,cur){
    TradePairs.update(id,{$set:cur}, function (err) {
      if (!err) {
        return false
      }else{
        return err
      }
    });
  },


  traidpair_remove: function(id){
    TradePairs.remove(id, function (err) {
      if (!err) {
        return false
      }else{
        return err
      }
    });
  },

});
