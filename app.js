console.log('Hello World!');

let times = 0;

const cron = require('node-cron');

cron.schedule('1-59/5 * * * * *', () => {
  times++;
  console.log('ticks every 5 seconds: ', times);

});