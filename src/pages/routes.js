let routes = [];

/**
 * Context api
 * @param {string} - directory file to create context
 * @param {boolean} - flag to determine use subdirectory or not
 * @param {RegExp} - match file name
 * @returns {context} - with function keys() for get link to file match
 */
const context = require.context('.', true, /route.js$/);

context.keys().forEach((route) => {
  routes.push(require(`${route}`).default);
});

routes.sort(function (a, b) {
  return a.path.length - b.path.length;
});

export default routes;
