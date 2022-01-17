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

* `assertArraysEqual(arr1, arr2)`: returns a boolean comparing two arrays
* `assertEqual(val1, val2)`: returns a boolean comparing two values
* `assertObjectsEqual(obj1, obj2)`: returns a boolean comparing two objects
* `countLetters(str)`: returns an object of all letters of a string and its count
* `countOnly(str, obj)`: returns an object of only the letters of a string found in the second argument and its count
* `eqArrays(arr1, arr2)`: returns true if arrays match
* `eqObjects(obj1, obj2)`: returns true if objects match
* `findKey(obj, callback)`: returns the first key found that passes a callback function call
* `findKeyByValue(object, value)`: returns the first key that matches a given value
* `flatten(arr)`: returns a new array with all sub-array elements concatenated recursively
* `head(arr)`: returns the first element of an array
* `letterPositions(str)`: returns an object of the index position(s) of all letters of a string
* `map(arr, callback)`: returns a new array of elements that pass the callback function
* `middle(arr)`: returns the middle element of an odd-length array, or the middle two elements of an even-length array
* `tail(arr)`: returns the tail of an array
* `takeUntil(arr, callback)`: returns from an array all elements up until a stopping condition
* `without(arr1, arr2)`: returns a new array of all elements not included in arr2