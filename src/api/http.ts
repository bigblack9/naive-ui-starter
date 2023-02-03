/*
 * @Author: black9 lcl904624834@live.com
 * @Date: 2023-02-03 12:08:55
 * @LastEditors: black9 lcl904624834@live.com
 * @LastEditTime: 2023-02-03 15:11:28
 * @FilePath: /naive-ui-template/src/api/https.ts
 */
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import showCodeMessage from '@/api/code';
import { formatJsonToUrlParams, instanceObject } from '@/utils/format';
import { getToken } from '@/utils/token';

const BASE_PREFIX = import.meta.env.VITE_API_BASEURL;

// 创建实例
const axiosInstance: AxiosInstance = axios.create({
  // 前缀
  baseURL: BASE_PREFIX,
  // 超时
  timeout: 1000 * 30,
  // 请求头
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getToken();
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      const { code, data, msg } = response.data;
      if (code !== 0) {
        const error = msg || 'ERROR';
        // ElMessage.error(error);
        return Promise.reject(error);
      }
      return data;
    }
    return response;
  },
  (error: AxiosError) => {
    const { response } = error;
    if (response) {
      // ElMessage.error(showCodeMessage(response.status));
      return Promise.reject(response.data);
    }
    // ElMessage.warning('网络连接异常,请稍后再试!');
    return Promise.reject(error);
  },
);
const service = {
  get<T = any>(url: string, data?: object): Promise<T> {
    return axiosInstance.get(url, { params: data });
  },

  post<T = any>(url: string, data?: object): Promise<T> {
    return axiosInstance.post(url, data);
  },

  put<T = any>(url: string, data?: object): Promise<T> {
    return axiosInstance.put(url, data);
  },

  delete<T = any>(url: string, data?: object): Promise<T> {
    return axiosInstance.delete(url, data);
  },

  upload: (url: string, file: FormData | File) =>
    axiosInstance.post(url, file, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  download: (url: string, data: instanceObject) => {
    window.location.href = `${BASE_PREFIX}/${url}?${formatJsonToUrlParams(data)}`;
  },
};

export default service;
