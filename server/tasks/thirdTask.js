let Task = require('./task');
const fs = require("fs-extra");
export default class CopyTask extends Task {

    constructor(name) {
        super(name);
    }

    run(callback) {
        console.log("Third Task");
        let from = "./tmp/git/test";
        let to = "./tmp/project/";

        fs.ensureDir(to, function () {
            fs.copy(from, to, function (err) {
                if (err) return console.error(err);
                callback(null, "done");
            });
        });
    }

};