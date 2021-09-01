const moment = require('moment-timezone');

moment.tz.setDefault("Europe/Dublin");

let targetTimeZone;

if(process.argv.length!= 3) {
  console.log("Usage is node <file-name> <Time Zone>");
  process.exit(1);
}
else {
    targetTimeZone = process.argv[2];
}
//var targetTimeZone  = "Asia/Delhi";

console.log(`The current time at ${targetTimeZone} is ${moment.tz(targetTimeZone).format()}`);