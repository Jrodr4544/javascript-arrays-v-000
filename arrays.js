var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,element) {
  var newArray = [element, ...array];
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var newArray = [...array, element]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

var accessElementInArray = (array, index) => {
  return array[index]
}

var destructivelyRemoveElementFromBeginningOfArray  = (array) => {
<<<<<<< HEAD
  array.shift()       // remove element first
  return array     // return new array
}

var removeElementFromBeginningOfArray = (array) => {
  // does not modify original array. returns array without the first element
  return array.slice(1)
}

var destructivelyRemoveElementFromEndOfArray = (array) => {
  array.pop()         // first remove array
  return array      // return new array
}

var removeElementFromEndOfArray = (array) => {
  // returns the array without the last element while keeping the original array with the same values
  return array.slice(0, array.length -1)
=======
  array.shift()
  return array
}

var removeElementFromBeginningOfArray = (array) => {
  var newArray = array.slice(0,array.length)
  return newArray
>>>>>>> 0bfb86189fbd7e7554576607fb2cdfef6ddc7962
}