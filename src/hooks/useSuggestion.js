import { useState, useEffect } from 'react';

import suggestionApi from '../apis/suggestion';

const useSuggestion = (query) => {
  const [search, setSearch] = useState([]);

  useEffect(() => {
    console.log('Category sidebar effect');
    (async () => {
      const response = await suggestionApi.get(`/?q=${query}`);
      const { data } = response.data;
      setSearch(data);
    })();
  }, [query]);

  return [search];
};

export default useSuggestion;
