import Server from './server';

class API extends Server {
  /**
   *  用途：获取诗文列表
   *  @url http://localhost:3000/index/poetyList
   *  返回http_code为200表示成功
   *  @method get
   *  @return {promise}
   */
  async getPoetyList(params = {}) {
    try {
      let result = await this.axios('get', '/poetyList', params);
      if (result) {
        return result;
      } else {
        let err = {
          tip: '获取诗文列表失败',
          response: result,
          data: params,
          url: 'http://localhost:3000/index/poetyList',
        }
        throw err;
      }
    } catch (err) {
      throw err;
    }
  }

  /**
   *  用途：获取佣金数据
   *  @url http://cangdu.org/shopro/data/balance
   *  返回http_code为200表示成功
   *  @method get
   *  @return {promise}
   */
  async getBalance(params = {}) {
    try {
      let result = await this.axios('get', '/shopro/data/balance', params);
      if (result && (result.data instanceof Object) && result.http_code === 200) {
        return result.data.data || {};
      } else {
        let err = {
          tip: '获取佣金数据失败',
          response: result,
          data: params,
          url: 'http://cangdu.org/shopro/data/balance',
        }
        throw err;
      }
    } catch (err) {
      throw err;
    }
  }
}

export default new API();