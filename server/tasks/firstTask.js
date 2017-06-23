let Task = require('./task');
import MyCollection from "/imports/api/collections/mycollection.js"
export default class FirstTask extends Task {

    constructor(name) {
        super(name);
    }

    run(callback) {
        let buildObject = MyCollection.findOne();
        console.log("First Task", buildObject);
        callback(null, "done");
    }

};