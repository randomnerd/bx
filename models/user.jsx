Meteor.users._transform = (user) => {
  return new User(user);
}

class User {
  constructor(data) {
    _.extend(this, data);
  }
  displayName() {
    return this.username || (this.emails && this.emails[0].address);
  }
}
