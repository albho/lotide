const assertEqual = require("../assertEqual");

// TEST CODE
assertEqual("Bootcamp", "Bootcamp"); // pass
assertEqual(1, 1); // pass
assertEqual("Lighthouse Labs", "Bootcamp"); // fail
assertEqual(1, 2); // fail
