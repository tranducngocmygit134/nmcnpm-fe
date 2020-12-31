const filterProduct = (name, value, search) => {
  /** Handle duplicate query  and query type true false
   * Example free=true&free=true or free=true&free=falseis very weird
   * @return {string} - search string
   */
  const query = search.replace(/\?/, '').split('&');
  const duplicate = query.findIndex((el) => el.split('=')[0] === name);
  if (duplicate === -1) {
    query.push(`${name}=${value}`);
  } else {
    query[duplicate] = `${name}=${value}`;
  }
  search = query.join('&');
  return search;
};

export default filterProduct;
