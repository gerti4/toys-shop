

const BASE_URL = process.env.NODE_ENV === 'production'
? '/'
: '//localhost:3000/'


// We need this in order for session-cookie to work in CORS
import Axios from 'axios';
var axios = Axios.create({
withCredentials: true
});

export default {
ajax
}




async function ajax(endpoint, method='get', data=null) {
try {    
  const res = await axios({
      url: `${BASE_URL}${endpoint}`,
      method,
      data
  })
  return res.data;
} catch (err) {
    _handleError(err);
}
}

function _handleError(err) {
console.log('Err:', err);
if (err.response.status === 401) {
    sessionStorage.clear();
    // router.push('/');
}
throw err;
}










// 'use strict'

// const axios = require('axios');



// function _handleError(err) {
//     console.log('Err:', err);
//     if (err.response.status === 401) {
//         sessionStorage.clear();
//         router.push('/');
//     }
//     throw err;
// }

// function get(url) {
//     console.log(url);
    
//     return axios.get(url)
//         .catch(_handleError)
// }

// function remove(url) {
//     return axios.delete(url)
//         .catch(_handleError)
// }

// function post(url, data) {
//     return axios.post(url, data)
//         .catch(_handleError)
// }
// function put(url, data) {
//     return axios.put(url, data)
//         .catch(_handleError)
// }


// export const httpService = {
//     get,
//     remove,
//     post,
//     put
// } 