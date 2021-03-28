const flattener = require("./flattener");
// npm package to get stdin as a string coming from the pipe
const getStdin = require('get-stdin');

// async arrow function to be able to use getStdin() which uses await
(async () => {
  // store test.json into example variable after parsing it from string to JSON
  var example = JSON.parse(await getStdin());
  console.log(flattener(example));
})();
