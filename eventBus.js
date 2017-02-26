class EventBus {
    constructor() {
        this._topicList = {};
        this._globalCallbackList = [];
    }

    subscribe(topic, callback) {
        if (typeof topic !== "string" || typeof callback !== "function") {
            throw "EventBus Unable to subscribe - topic is not string or callback is not a function";
        }
        if (this._topicList[topic] === undefined) {
            this._topicList[topic] = [];
        }

        var i = this._topicList[topic].push(callback) - 1;

        //UnSub function !!
        return () => {
            //Setting Callback as null;
            this._topicList[topic][i] = null;
        };
    }

    publish(topic, ...args) {
        if (this._topicList[topic] !== undefined) {
            this._topicList[topic].map(function (callback) {
                if (callback !== null) {//SKIP the unsubscribed callback !
                    callback.apply(null, args);
                }
            });
        }
    }
}

module.exports = EventBus;
