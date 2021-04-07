import axios from 'axios';
import { APIBaseURL } from './base';

export interface User {
  id: string | number;
  erp: string;
  fullname: string;
  email: string;
  mobile: string;
  gitUserAvatar: string;
  gitUserId: string | number;
  isAdmin: boolean;
  createdAt: string;
}

/**
 * 获取用户信息，也就是检查登录态
 */
export function getCurrentUser(): Promise<any> {
  return axios.get(`${APIBaseURL.api}/users/current`).then(r => r);
}
// 退出登录
export function logout(): Promise<any> {
  return axios.get(`${APIBaseURL.api}/auth/logout`).then(r => r);
}
