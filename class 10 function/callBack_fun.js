"use strict";
function mycallback(text) {
    console.log("inside mycallback" + text);
}
function callingfunction(initialText, cb) {
    cb(initialText);
}
callingfunction("myText", mycallback);
