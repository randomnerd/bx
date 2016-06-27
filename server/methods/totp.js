import base32 from 'thirty-two';
import notp from 'notp';
import {Meteor} from 'meteor/meteor';
import {Random} from 'meteor/random';

function encodeForGoogle(key) {
  return base32.encode(key).toString().replace(/=/g, '');
}

function getQRCode(label, key) {
  let googleUri = 'https://chart.googleapis.com/chart?chs=200x200&chld=M|0&cht=qr&chl=';
  return `${googleUri}otpauth://totp/${label}?secret=${encodeForGoogle(key)}`;
}

Meteor.methods({
  '/totp/key': function(force) {
    if (!this.userId) throw new Meteor.Error('Unauthorized');
    let user = Meteor.user();
    if (user.totpKey && user.totpEnabled) throw new Meteor.Error('TOTP must be disabled to generate a new key');
    let key = null;
    if (user.totpKey && !force) {
      key = user.totpKey;
    } else {
      key = Random.hexString(8);
      Meteor.users.update({_id: this.userId}, {$set: {totpKey: key}});
    }
    let qr = getQRCode(user.displayName(), key);
    return {key, qr};
  },

  '/totp/verify': function(token) {
    if (!this.userId) throw new Meteor.Error('Unauthorized');
    let user = Meteor.user();
    if (!user.totpKey) throw new Meteor.Error('No TOTP key set, unable to verify');
    return !!notp.totp.verify(token, user.totpKey);
  },

  '/totp/enable': function(token, disable) {
    if (!this.userId) throw new Meteor.Error('Unauthorized');
    let user = Meteor.user();
    if (!user.totpKey) throw new Meteor.Error('No TOTP key set, unable to verify');
    if (!notp.totp.verify(token, user.totpKey)) throw new Meteor.Error('Wrong token');
    Meteor.users.update({_id: this.userId}, {$set: {totpEnabled: !disable}});
    return {totpEnabled: !disable};
  }
});
