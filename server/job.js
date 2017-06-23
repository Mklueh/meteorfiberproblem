const async = require("async");
import FirstTask from "./tasks/firstTask";
import SecondTask from "./tasks/secondTask";
import ThirdTask from "./tasks/thirdTask";
import FourthTask from "./tasks/fourthTask";
export default class Job {

    start() {
        let self = this;
        async.series([
                function (callback) {
                    new FirstTask().run(callback)
                },
                function (callback) {
                    Meteor.bindEnvironment(function (err, res) {
                        new SecondTask().run(callback);
                    }, function () {
                        console.log('Failed to bind environment');
                    })
                },
                function (callback) {
                    Meteor.bindEnvironment(function (err, res) {
                        new ThirdTask().run(callback);
                    }, function () {
                        console.log('Failed to bind environment');
                    })
                },
                function (callback) {
                    Meteor.bindEnvironment(function (err, res) {
                        new FourthTask().run(callback);
                    }, function () {
                        console.log('Failed to bind environment');
                    })
                },
            ],
            function (err, results) {
                console.log(err, results);
            }
        )

        /*

         Meteor.bindEnvironment(function (err, res) {
         // do stuff
         // can access Meteor.userId
         // still have MongoDB write fence
         }, function () { console.log('Failed to bind environment'); })
         */
    }
};