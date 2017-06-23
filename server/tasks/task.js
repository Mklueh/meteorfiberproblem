module.exports = class Task{

    /**
     * @param name task name
     */
    constructor(name) {
        this._buildId = name;
    }


    get name() {
        return this._buildId;
    }
};