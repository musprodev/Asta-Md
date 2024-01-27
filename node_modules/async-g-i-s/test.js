const gis = require('.');
const test = require('node:test');
const assert = require("node:assert");

test("new regex", async () => {
  const results = await gis("akif9748");
  assert(results.length > 0);
  assert(results[0].url.length > 0);
  assert(results[0].height > 0);
  assert(results[0].width > 0);
  assert(results[0].color[0] > 0);
});

test("legacy regex", async () => {
  const results = await gis("akif9748", { newRegex: false });
  assert(results.length > 0);
  assert(results[0].url.length > 0);
  assert(results[0].height > 0);
  assert(results[0].width > 0);
  assert(!results[0].color[0]);

});