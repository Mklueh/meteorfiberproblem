let Task = require('./task');
const NodeGit = require("nodegit");
const fs = require("fs");

export default class SecondTask extends Task {
    constructor(name) {
        super(name);
    }

    run(callback) {
        console.log("Second Task");
        let repository = "https://github.com/aldeed/meteor-autoform.git";
        let directory = "./tmp/git/test";

        if (fs.existsSync(directory))return callback(null, "local repository already exists. Cloning skipped");

        let options = {};
        options.fetchOpts = {
            callbacks: {
                certificateCheck: function () {
                    return 0;
                }
            }
        };

        NodeGit.Clone(repository, directory, options)
        // Look up this known commit.
            .then(function (repo) {
                console.log("then", repo);
            })
            .catch(function (err) {
                console.log(err);
            })
            .then(function () {
                callback(null, "done");
            })
    }
};