/**
 * 全局配置文件
 */
let baseURL;
let imgUrl = 'http://192.168.2.203/index/index/img/';
if (process.env.NODE_ENV === 'development') {
  baseURL = '/index/';
} else {
  baseURL = '/index/';
}


export default { imgUrl, baseURL }