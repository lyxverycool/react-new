import 'whatwg-fetch';
require('es6-promise').polyfill();

let common_url = '/index';  //服务器地址
let token = '';
/**
 * @param {string} url 接口地址
 * @param {string} method 请求方法：GET、POST，只能大写
 * @param {JSON} [params=''] body的请求参数，默认为空
 * @return 返回Promise
 */
function http(url, method, params = '') {
  let header = {
    "Content-Type": "application/json;charset=UTF-8",
    "accesstoken": token  //用户登陆后返回的token，某些涉及用户数据的接口需要在header中加上token
  };
  let config;
  const config1 = {
    method: method,
    headers: header,
    credentials: 'include'
  }
  const config2 = {
    method: method,
    headers: header,
    credentials: 'include',
    body: JSON.stringify(params)
  }
  if (method === "GET") {
    config = config1;
  } else {
    config = config2
  }
  console.log('request url:', url, params);  //打印请求参数
  return new Promise(function (resolve, reject) {
    fetch(common_url + url, config).then((response) => {
      console.log(response)
      if (response.ok) {
        return response.json();
      } else {
        reject({ status: response.status })
      }
    }).then((responseData) => {
      resolve(responseData);
    }).catch((err) => {
      reject(err);
    })
  })
}

export default http;