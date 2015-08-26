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
  'notifications/add': () =>{
    //Notifications.remove({},()=>{
      var arr=[
        {userId: Meteor.userId(), type:'warning',title:'Your password changed!',ack: false, createdAt: new Date()},
        {userId: Meteor.userId(), type:'accept',title:'Your password changed!',ack: false, createdAt: new Date()},
        {userId: Meteor.userId(), type:'accept',title:'Your password changed!',ack: false, createdAt: new Date()},
      ]
      if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
      for(var i=0; i<2; i++){
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
