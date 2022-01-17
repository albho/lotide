const assertEqual = require("../assertEqual");

// => should all PASS
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 1);

// => should all FAIL
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 2);
