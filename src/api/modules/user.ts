/*
 * @Author: black9 lcl904624834@live.com
 * @Date: 2023-02-03 15:12:58
 * @LastEditors: black9 lcl904624834@live.com
 * @LastEditTime: 2023-02-03 15:26:42
 * @FilePath: /naive-ui-template/src/api/modules/user.ts
 */
import service from '@/api/http';

export interface LoginParams {
  username: string;
  password: string;
}

export interface RegisterParams extends LoginParams {
  phone: string;
  code: string;
}

const Api = {
  Login: '/user/login',
  Register: '/user/register',
  ResetPassword: '/user/resetPassword',
  GetSmsCode: '/user/smsCode',
  GetUserInfo: '/user/userInfo',
  UpdateUserInfo: '/user/updateUserInfo',
  UpdatePassword: '/user/updatePassword',
  RefreshToken: '/user/refreshToken',
};

export const login = (params: LoginParams) => service.post(Api.Login, params);

export const register = (params: RegisterParams) => service.post(Api.Register, params);

export const resetPassword = (params: RegisterParams) => service.post(Api.ResetPassword, params);

export const getSmsCode = (params: { phone: string }) => service.get(Api.GetSmsCode, params);

export const getUserInfo = () => service.get(Api.GetUserInfo);

export const updateUserInfo = (params: { nickname: string }) => service.post(Api.UpdateUserInfo, params);

export const updatePassword = (params: object) => service.post(Api.UpdatePassword, params);
