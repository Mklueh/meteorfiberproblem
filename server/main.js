import {Meteor} from 'meteor/meteor';
import Job from "./job";

if (Meteor.isServer) {
    Meteor.methods({
        "execute.my.tasks": function () {
            new Job().start();
        }
    })
}