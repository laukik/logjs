var logx = require('./lib/logjs');

var logjs = new logx();
logjs.init({
    level : "ERROR"
});

var x = { A:1, B:2};
logjs.debug("DEBUG");
logjs.info("INFO");
logjs.warn("WARN");
logjs.error("ERROR");
logjs.fatal("FATAL"+ x.A);
