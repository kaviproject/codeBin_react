import { Mongo } from 'meteor/mongo';

Meteor.methods({
    'bins.insert': function () {
        return Bins.insert({
            createAt: new Date(),
            content: '',
            sharedWith: [],
            ownerId: this.userId
        });
    }
    
});

export const Bins = new Mongo.Collection('bins');