let Task = require('./task');
import MyCollection from "/imports/api/collections/mycollection.js";

export default class FourthTask extends Task {

    constructor(name) {
        super(name);
    }

    run(callback) {

        /**
         *  Error: Can't wait without a fiber
         * @type {any}
         */
        let result = MyCollection.findOne();
        console.log("Fourth task", result)
    }
};
