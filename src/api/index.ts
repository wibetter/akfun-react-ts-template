import axios from 'axios';
import { message } from 'antd';
export * from './base';
export * from './user';

axios.defaults.withCredentials = true;

axios.interceptors.response.use(
  response => {
    // 根据 API 接口调整，增加返回 code 判断。
    const respResult = response.data;
    if (respResult && respResult.code === 0) {
      if (!respResult.data) {
        // respResult.data为null或undefined时将其重置为[]
        respResult.data = [];
      }
    } else {
      const errorMsg = respResult.msg || respResult.data;
      // code !== 0 时，data返回的数据是后天提供的错误信息
      respResult.data = [];
      if (errorMsg) {
        message.error(errorMsg);
      }
    }
    return respResult;
  },
  error => {
    // ⚠️ 拦截401状态码（说明当前接口需要用户登录），自动跳转到登录页
    if (
      error.response &&
      error.response.status === 403 &&
      error.response.data
    ) {
      // 权限不足，则直接返回空数组
      return Promise.resolve(error.response.data);
    } else if (error.response && error.response.status === 401) {
      message.error('权限不足');
    }
    return Promise.reject(error);
  },
);

export default axios;
