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
                    new SecondTask().run(callback);
                },
                function (callback) {
                    new ThirdTask().run(callback);
                },
                function (callback) {
                    new FourthTask().run(callback);
                },
            ],
            function (err, results) {
                console.log(err, results);
            }
        )
    }
};
