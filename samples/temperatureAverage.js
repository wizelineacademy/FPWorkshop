/*
 * Given an unordered list of objects that represent temperature readings from a high tech device, write a function "averageInRange" that receives the following arguments:
 *    - A start and end date to filter from
 *    - The list of temperature readings
 *
 * This function should return the average temperature between the start and end dates from the list of temperature readings
 *
 * averageInRange(startDate, endDate, readings) -> average
 *
 * Each temperature reading has the following structure:
 *
 * {
 *   value: Number,
 *   timeStamp: Date,
 * }
 *
 * */

const {
  filter,
  length,
  // you can check out other utils in the utils directory
} = require('../utils');

function averageInRange(startDate, endDate, readings) {
  /* Magic goes here */
}

const data = [
  {value: 15, timeStamp: new Date(2000,06,20,0,15,0)},
  {value: 18, timeStamp: new Date(2000,06,20,1,15,0)},
  {value: 17, timeStamp: new Date(2000,06,20,2,15,0)},
  {value: 16, timeStamp: new Date(2000,06,20,3,15,0)},
  {value: 14, timeStamp: new Date(2000,06,20,4,15,0)},
  {value: 19, timeStamp: new Date(2000,06,20,5,15,0)},
  {value: 21, timeStamp: new Date(2000,06,20,6,15,0)},
  {value: 23, timeStamp: new Date(2000,06,20,7,15,0)},
  {value: 19, timeStamp: new Date(2000,06,20,8,15,0)},
  {value: 20, timeStamp: new Date(2000,06,20,9,15,0)},
  {value: 18, timeStamp: new Date(2000,06,20,10,15,0)},
  {value: 18, timeStamp: new Date(2000,06,20,11,15,0)},
  {value: 25, timeStamp: new Date(2000,06,20,12,15,0)},
  {value: 24, timeStamp: new Date(2000,06,20,13,15,0)},
  {value: 49, timeStamp: new Date(2000,06,20,14,15,0)},
  {value: 23, timeStamp: new Date(2000,06,20,15,15,0)},
  {value: 20, timeStamp: new Date(2000,06,20,16,15,0)},
  {value: 19, timeStamp: new Date(2000,06,20,17,15,0)},
  {value: 21, timeStamp: new Date(2000,06,20,18,15,0)},
  {value: 20, timeStamp: new Date(2000,06,20,19,15,0)},
  {value: 15, timeStamp: new Date(2000,06,20,20,15,0)},
  {value: 14, timeStamp: new Date(2000,06,20,21,15,0)},
  {value: 16, timeStamp: new Date(2000,06,20,22,15,0)},
  {value: 17, timeStamp: new Date(2000,06,20,23,15,0)},
  {value: 17, timeStamp: new Date(2000,06,20,24,15,0)},
  {value: 11, timeStamp: new Date(2000,06,20,25,15,0)},
  {value: 10, timeStamp: new Date(2000,06,20,26,15,0)},
  {value: 19, timeStamp: new Date(2000,06,20,27,15,0)},
  {value: 18, timeStamp: new Date(2000,06,20,28,15,0)},
  {value: 17, timeStamp: new Date(2000,06,20,29,15,0)},
  {value: 14, timeStamp: new Date(2000,06,20,30,15,0)},
];

console.log(averageInRange(
  new Date(2000, 06, 20, 9, 0, 0),
  new Date(2000, 06, 20, 15, 0, 0),
  data
));
