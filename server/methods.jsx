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
      {_id:_id,userId:Meteor.userId()},
      {$set:{ack:true}},
      (err)=>{
        if(err){
          return err
        }else {
          return false
        }
      }
    )
  }



});
