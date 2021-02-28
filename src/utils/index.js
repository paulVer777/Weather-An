export const fetchData = (url, options) => {
    if (options == null) options = {}
    return fetch(url, options).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response.json());
      } else {
        return Promise.reject(response.json());
      }
    })
  };