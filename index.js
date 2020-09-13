const _ = require("underscore")

const arrNum = [581, 35, 89, 1002, 68]

const eachElement = (num) => {
  if (num % 2 === 0) {
    console.log(`${num} is an even number`)
  } else {
    console.log(`${num} is an odd number`)
  }
}

_.each(arrNum, eachElement)
