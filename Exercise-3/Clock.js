'use strict';
var EventEmitter = require('events');
class Clock extends EventEmitter{
    constructor(){
        super();
    }

    visit(){
        this.emit('tick');
    }
}

const objClock=new Clock();
objClock.on('tick', function(){
    setInterval(function(){
        console.log('woohoo');
    },1000)
});
objClock.visit();