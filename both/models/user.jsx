import {Balances} from '../collections';

Meteor.users.deny({
  update() { return true; }
});

Meteor.users._transform = (user) => {
  return new User(user);
};

class User {
  constructor(data) {
    _.extend(this, data);
  }
  displayName() {
    return this.username || (this.emails && this.emails[0].address);
  }
  isAdmin() {
    return Roles.userIsInRole(this._id, 'admin');
  }
  balanceFor(currId) {
    return Balances.findOne({userId: this._id, currId: currId});
  }
}
