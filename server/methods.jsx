Meteor.methods({
  'jobs/wallet/newWallet': (currId) => {
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
    var job = new Job(Jobs, 'newAddress', {
      currId: currId,
      userId: Meteor.userId()
    });
    job.save();
  },
  'notifications/del': (_id) =>{
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
    Notifications.update(
      {_id: _id, userId: Meteor.userId()},
      {$set:{ack:true}},
      (err)=>{
        if(err){
          return err
        }else {
          return false
        }
      }
    )
  },
  'notifications/del_realy': (_id) =>{
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
    Notifications.remove(
      {_id: _id},
      (err)=>{
        if(err){
          return err
        }else {
          return false
        }
      }
    )
  },
  'notifications/clear_all': (_id) =>{
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
    Notifications.remove({userId: Meteor.userId()},
      (err)=>{
        if(err){
          return err
        }else {
          return false
        }
      }
    )
  },
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
  }




});
