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

const data = require('../data/temperatures');
const {
  filter,
  length,
  logger,
  // you can check out other utils in the utils directory
} = require('../utils');

function averageInRange(startDate, endDate, readings) {
  /* Magic goes here */
}

logger(averageInRange(
  new Date(2000, 06, 20, 9, 0, 0),
  new Date(2000, 06, 20, 15, 0, 0),
  data
)); // ~ 25.6
