Logjs is minimal logging API.

Logjs has 6 diffrent log levels:

    1.DEBUG         : Will log everything
    2.INFO          : will log INFO, ERROR, WARNING and FATAL  { Default Log Level }
    3.ERROR         : will log ERROR, WARNING and FATAL
    4.WARNING       : will log WARNING as well as FATAL
    5.FATAL         : Will log only FATAL logging
    6.NO_LOGGING    : Won't log anything


How to Use :

```javascript
    
    var logjs = require('./lib/logjs');
    var logger = new logjs();
    
    logger.init({
        level : "FATAL"
    });
    
    logger.debug("DEBUG");
    logger.info("INFO");
    logger.warn("WARN");
    logger.error("ERROR");
    logger.fatal("FATAL");

```


    
