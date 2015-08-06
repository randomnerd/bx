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
		Currencies.update(id,{$set:params}, function (err) {
			if (!err) {
				return false
			}else{
				return err
			}
		});
	},


	currrency_remove: function(id){
		Currencies.remove(params, function (err) {
			if (!err) {
				return false
			}else{
				return err
			}
		});
	},


});
