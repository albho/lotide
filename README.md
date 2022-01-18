# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @albertho/lotide`

**Require it:**

`const _ = require('@albertho/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
* `countLetters(str)`: returns a new object of all letters of a string and the number of times it appears in the string
* `countOnly(str, obj)`: returns a new object of only the letters of a string found in the second argument and the number of times it appears in the string
* `eqArrays(arr1, arr2)`: returns true if 2 arrays have the same values; else, returns false
* `eqObjects(obj1, obj2)`: returns true if 2 objects have the same values; else, returns false
* `findKey(obj, callback)`: returns the first key found that passes a callback function (passed in as the second argument)
* `findKeyByValue(object, value)`: returns the first key found that matches a given value
* `flatten(arr)`: returns a new array with all sub-array elements concatenated recursively
* `head(arr)`: returns the first element of an array
* `letterPositions(str)`: returns a new object with a key for each unique letter of a string, each with its value as an array of the letter's index position(s)
* `map(arr, callback)`: returns a new array of elements that pass the callback function (passed in as the second argument) 
* `middle(arr)`: returns the middle element of an odd-length array, or the middle two elements of an even-length array
* `tail(arr)`: returns a new array consisting of the the tail of the original array
* `takeUntil(arr, callback)`: returns a new array of all of the elements of the original array up until a stopping condition, dictated by a callback function (passed in as the second argument)
* `without(arr1, arr2)`: returns a new array of all of the elements in the first array not included in the second array

Some additional assertion functions:
* `assertArraysEqual(arr1, arr2)`: returns a `console.log` message comparing two arrays
* `assertEqual(val1, val2)`: returns a `console.log` message comparing two values
* `assertObjectsEqual(obj1, obj2)`: returns a `console.log` message comparing two objects