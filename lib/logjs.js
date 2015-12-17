/*
*   Log Levels :
*       DEBUG
*       INFO
*       ERROR
*       WARN
*       FATAL
*/

var color = require('colors');


const profileLevel = {
    NO_LOGGING: -1,
    DEBUG : 4,
    INFO : 3,
    ERROR : 2,
    WARNING : 1,
    FATAL : 0
}


color.setTheme({
    debug :"blue",
    info  :"cyan",
    error :"green",
    warn  :"yellow",
    fatal :"red",
});

function logjs(){
    this.profile = "ERROR"
}

logjs.prototype.init = function (profile) {
    var level = profile.level;
    var callValue = null;
    switch(level){
        case "NO_LOGGING":
            this.profile = profileLevel.NO_LOGGING;
            break;
        case "DEBUG":
            this.profile = profileLevel.DEBUG;
            break;
        case "INFO" :
            this.profile = profileLevel.INFO;
            break;
        case "ERROR" :
            this.profile = profileLevel.ERROR;
            break;
        case "WARNING":
            this.profile = profileLevel.WARNING;
            break;
        case "FATAL":
            this.profile = profileLevel.FATAL;
            break;
        default:
            this.profile = profileLevel.ERROR;
            break;
    }
}

logjs.prototype.debug = function ( data) {
    if( this.profile >= profileLevel.DEBUG){
        console.log(color.debug(data));
    }
}


logjs.prototype.info = function ( data) {
    if( this.profile >= profileLevel.INFO){
        console.log(color.info(data));
    }
}


logjs.prototype.error = function ( data) {
    if( this.profile >= profileLevel.ERROR){
        console.log(color.error(data));
    }
}

logjs.prototype.warn = function ( data) {
    if( this.profile >= profileLevel.WARNING){
        console.log(color.warn(data));
    }
}

logjs.prototype.fatal = function ( data) {
    if( this.profile >= profileLevel.FATAL){
        console.log(color.fatal(data));
    }
}


module.exports = logjs;