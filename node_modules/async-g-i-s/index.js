const fetch = global.fetch || require('node-fetch');
const LEGACY_REGEX = /\["(http.+?)",(\d+),(\d+)\]/g;
const REGEX = /"(\bhttps?:\/\/[^"]+)",(\d+),(\d+)],null,\d+,"rgb\((\d+),(\d+),(\d+)\)"/g;

/**
 * 
 * Async version of g-i-s module
 * @async
 * @param {String} searchTerm Search term to search
 * @param {Object} options Options for search
 * @param {Object} options.query You can use custom query
 * @param {String} options.userAgent User agent for request
 * @param {Boolean} options.newRegex Better filtering, if you want to find everything, set as false
 * @returns {Promise<[{url: string, height: number, width: number }]>} Array of results
 */
module.exports = async function gis(searchTerm, options = {}) {
  if (!searchTerm || typeof searchTerm !== 'string') throw new TypeError("searchTerm must be a string.");
  if (typeof options !== 'object') throw new TypeError("options argument must be an object.");

  const {
    query = {},
    userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
    newRegex = true
  } = options,
    body = await fetch(`http://www.google.com/search?${new URLSearchParams({ ...query, tbm: "isch", q: searchTerm })}`, { headers: { 'User-Agent': userAgent } }).then(res => res.text()),
    content = body.slice(body.lastIndexOf("ds:1"), body.lastIndexOf('sideChannel')),
    regex = newRegex ? REGEX : LEGACY_REGEX,
    results = [];

  let result;

  while (result = regex.exec(content))
    results.push({
      url: result[1],
      height: +result[2],
      width: +result[3],
      color: result.slice(4, 7).map(Number)
    });

  return results;
}