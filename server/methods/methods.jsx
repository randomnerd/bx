import {Currencies, Notifications, wAddressBook, Chat, Withdrawals} from '/both/collections';
import {Jobs} from '../job_collection';

Meteor.methods({
  'jobs/wallet/newWallet': (currId) => {
    if (!Meteor.userId())
      throw new Meteor.Error('Unauthorized');
    var job = new Job(Jobs, 'newAddress', {
      currId: currId,
      userId: Meteor.userId()
    });
    job.save();
  },
  'notifications/del': (_id) => {
    if (!Meteor.userId())
      throw new Meteor.Error('Unauthorized');
    Notifications.update({
      _id: _id,
      userId: Meteor.userId()
    }, {
      $set: {
        ack: true
      }
    }, (err) => {
      if (err) {
        return err
      } else {
        return false
      }
    })
  },
  'notifications/del_realy': (_id) => {
    if (!Meteor.userId())
      throw new Meteor.Error('Unauthorized');
    Notifications.remove({
      _id: _id
    }, (err) => {
      if (err) {
        return err
      } else {
        return false
      }
    })
  },
  'notifications/clear_all': (_id) => {
    if (!Meteor.userId())
      throw new Meteor.Error('Unauthorized');
    Notifications.remove({
      userId: Meteor.userId()
    }, (err) => {
      if (err) {
        return err
      } else {
        return false
      }
    })
  },
  //
  'notifications/add': () =>{
    //Notifications.remove({},()=>{
      var arr=[
        {userId: Meteor.userId(), type:'warning',title:'Password changed!', message:'A dropdown can include a search prompt inside its menu',ack: false, createdAt: new Date()},
        {userId: Meteor.userId(), type:'accept',title:'Your password changed!', message: 'A dropdown menu can appear to be floating below an element.',ack: false, createdAt: new Date()},
        {userId: Meteor.userId(), type:'info',title:'You won an one million dollars!', message: 'menu can contain dividers to separate related content.',ack: false, createdAt: new Date()},
        {userId: Meteor.userId(), type:'chat',title:'Your password changed!', message: 'A dropdown menu can appear to be floating below an element.',ack: false, createdAt: new Date()},
        {userId: Meteor.userId(), type:'error',title:'You won an one million dollars!', message: 'menu can contain dividers to separate related content.',ack: false, createdAt: new Date()},
      ]
      if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
      for(var i=0; i<5; i++){
        Notifications.insert(
          arr[i],
          (err)=>{
            if(err){
              //return err
            }else {
              //return false
            }
          }
        )
      }
    //})
  },
  //

  'address/add': function(address) {
    if (!Meteor.userId())
      throw new Meteor.Error('Unauthorized');
    address.userId = Meteor.userId()
    wAddressBook
      .insert(address, function(err, id) {
        if (!err) {
          return false
        } else {
          return err
        }
      });
  },
  "address/update": function(id, address) {
    if (!Meteor.userId())
      throw new Meteor.Error('Unauthorized');
    wAddressBook
      .update(id, {
        $set: address
      }, function(err) {
        if (!err) {
          return false
        } else {
          return err
        }
      });
  },

  'address/remove': function(id) {
    if (!Meteor.userId())
      throw new Meteor.Error('Unauthorized');
    wAddressBook
      .remove(id, function(err) {
        if (!err) {
          return false
        } else {
          return err
        }
      });
  },

  'chat/add': function(message) {
    //Chat.remove({})
    if (!Meteor.userId())
      throw new Meteor.Error('Unauthorized');
    message.userId = Meteor.userId()
    message.userName = Meteor.user()
      .username
    message.createdAt = new Date()
    Chat
      .insert(message, function(err, id) {
        if (!err) {
          return false
        } else {
          return err
        }
      });
  },
  "chat/update": function(id, address) {
    if (!Meteor.userId())
      throw new Meteor.Error('Unauthorized');
    Chat
      .update(id, {
        $set: address
      }, function(err) {
        if (!err) {
          return false
        } else {
          return err
        }
      });
  },

  'chat/remove': function(id) {
    if (!Meteor.userId())
      throw new Meteor.Error('Unauthorized');
    Chat
      .remove(id, function(err) {
        if (!err) {
          return false
        } else {
          return err
        }
      });
  },

  "chatname/update": function(name) {
    if (!Meteor.userId())
      throw new Meteor.Error('Unauthorized');
    Meteor.users
      .update(Meteor.userId(), {
        $set: {
          username: name
        }
      }, function(err) {
        if (!err) {
          return false
        } else {
          return err
        }
      });
  },
  "userblocs/update": function(sets) {
    if (!Meteor.userId())
      throw new Meteor.Error('Unauthorized');
    Meteor.users
      .update(Meteor.userId(), {
        $set: {
          profile: {blocs :sets}
        }
      }, function(err) {
        if (!err) {
          return false
        } else {
          return err
        }
      });
  },
  withdraw: function(params) {
    if (!Meteor.userId())
      throw new Meteor.Error('Unauthorized');
    let curr = Currencies.findOne(params.currId);
    Withdrawals.insert({
      userId: Meteor.userId(),
      currId: params.currId,
      address: params.address,
      fee: parseFloat(curr.withdrawalFee) * Math.pow(10, 8),
      amount: parseFloat(params.amount) * Math.pow(10, 8),
      state: 'initial',
      createdAt: new Date()
    });
  }

});
