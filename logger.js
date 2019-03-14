'use strict';
var winston = require('winston');
var helpers = require("./helpers");

var seleniumDriver, config, dateTime;

var logLevels = {
	DEBUG	: 'debug',
	INFO	: 'info',
	WARN	: 'warn',
	ERROR	: 'error'
};

var logger = function () {
    return {
    	init: function(driver, logFilenamePrefix, currentDateTime){
    		var self = this;
    		seleniumDriver = driver;
    		dateTime = currentDateTime;
    		
    		var conf = {
    			// Configuracion para Consola
    			"consoleTransport" 	: true,
    	    	"level" 			: "info",
    			"silent"			: false,
    			"colorize"			: false,
    			"timestamp"			: true,
    			"json"				: false,		

    			// Configuracion para Archivo
    			"fileTransport"		: true,
    			"filename"			: self.getLogFilename(logFilenamePrefix),
    			"maxsize"			: 50000000,
    			"maxFiles"			: 10,
    			"stream"			: null,
    			
    			// Timestamp Timezone
    			"timestamp": function (){
    		        return new Date(Date.now() - (new Date().getTimezoneOffset() * 60000)).toISOString().substring(0, 19).replace(/:/gi,'-').replace('T','_'); 
    		     }
    	    };
    		
    		this.config(conf);    	    
    	},
    	getLogFilename: function(logFilenamePrefix){
    		return logFilenamePrefix + (dateTime ? ("-" + dateTime) : '') + ".log";
    	},
        config: function(conf) {
        	config = conf;
        	
        	// Clean All Transports
        	winston.remove(winston.transports.Console);
        	
        	// Configure Console Transport (if desired)
        	if (conf.consoleTransport){
            	winston.add(winston.transports.Console, conf);
        	}
        	
        	// Configure File Transport (if desired)
        	if (conf.fileTransport){
            	winston.add(winston.transports.File, conf);
        	}
        },
    	debug: function(){
    		var this2 = this, arguments2 = arguments;
			seleniumDriver.then(function(){
				winston.debug.apply(this, arguments2);
			});
    	},
    	log: function(){
    		var this2 = this, arguments2 = arguments;
			seleniumDriver.then(function(){
				winston.log.apply(this, arguments2);
			});
    	},
    	info: function(){
    		var this2 = this, arguments2 = arguments;
			seleniumDriver.then(function(){
				winston.info.apply(this, arguments2);
			});
    	},
    	warn: function(){
    		var this2 = this, arguments2 = arguments;
			seleniumDriver.then(function(){
				winston.warn.apply(this, arguments2);
			});
    	},
    	error: function(){
			var len = arguments.length;
			for (var i=0; i<len; i++){
				if (arguments[i] instanceof Error){
					arguments[i] = arguments[i].stack;
				}
			}
    		var this2 = this, arguments2 = arguments;
			seleniumDriver.then(function(){
				winston.error.apply(this, arguments2);
			});
    	},
        isLevelEnabled: function(levelName){
        	return (winston.levels[levelName] >= winston.levels[config.level]);
        },
        isDebugEnabled: function(){
        	return this.isLevelEnabled(logLevels.DEBUG);
        },
        isInfoEnabled: function(){
        	return this.isLevelEnabled(logLevels.INFO);
        },
        isWarnEnabled: function(){
        	return this.isLevelEnabled(logLevels.WARN);
        },
        isErrorEnabled: function(){
        	return this.isLevelEnabled(logLevels.ERROR);
        }
    };
};

module.exports = logger();
