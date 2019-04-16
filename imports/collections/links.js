import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo';

export const Links = new Mongo.Collection('links');

Meteor.methods({
    'links.insert': function(url) {
        console.log('attempting to save this :', url)
    }
});


