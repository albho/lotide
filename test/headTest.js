const assertEqual = require("../assertEqual");
const head = require("../head");

// => should all PASS
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// => should all FAIL
assertEqual(head([5, 6, 7]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Lighthouse");
