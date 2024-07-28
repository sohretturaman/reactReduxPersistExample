import {BASE_URL} from './NetworkPaths';

const Get = urlOption => {
  return fetch(BASE_URL + urlOption, {
    headers: {
      'content-type': 'application/json',
      //   authorization: 'apikey',
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    console.log('response.json()', response.json());
    return response.json();
  });
};

const Post = (urlOption, body) => {
  console.log('post function', urlOption, body);
  try {
    return fetch(BASE_URL + urlOption, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        //   authorization: 'apikey ',
      },
      body: JSON.stringify(body),
    })
      .then(response => {
        console.log('response.json() in post',response.status, response.json());
        if (response.ok) {
          return response.json();
        }
      })
      .catch(error => console.log('error', error));
  } catch (error) {
    console.log('error', error);
  }
};

const Delete = (urlOption, id) => {
  fetch(BASE_URL + urlOption + id, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      //   authorization: 'apikey ',
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    console.log('response.json()', response.json());
    return response.json();
  });
};

const Put = (urlOption, body, id) => {
  //check it
  return fetch(BASE_URL + urlOption + id, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      //   authorization: 'apikey ',
    },
    body: JSON.stringify(body),
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    console.log('response.json()', response.json());
    return response.json();
  });
};
export {Get, Post, Delete, Put};
