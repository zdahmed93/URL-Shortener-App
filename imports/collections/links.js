import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo';
import validUrl from 'valid-url';
import {check, Match} from 'meteor/check';

export const Links = new Mongo.Collection('links');

Meteor.methods({
    'links.insert': function(url) {
        //console.log('attempting to save this :', url)
        check(url, Match.Where(url => validUrl.isUri(url)) );

        const token = Math.random().toString(36).slice(-5);
        console.log(token);
        Links.insert({url, token, clicks: 0});
    }
});


