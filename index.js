var format = require('date-format');
format(); // defaults to ISO8601 format and current date
format(new Date()); // defaults to ISO8601 format
let time = format('hh:mm:ss.SSS', new Date()); // just the time
format(format.ISO8601_WITH_TZ_OFFSET_FORMAT, new Date()); // in ISO8601 with timezone
console.log("Time captured : "+time);