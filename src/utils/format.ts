/*
 * @Author: black9 lcl904624834@live.com
 * @Date: 2023-02-03 12:08:39
 * @LastEditors: black9 lcl904624834@live.com
 * @LastEditTime: 2023-02-03 12:08:46
 * @FilePath: /naive-ui-template/src/utils/format.ts
 */
import dayjs from 'dayjs';

export declare interface instanceObject {
  [key: string]: string;
}

/**
 * JSON转url参数
 * @param data Json格式数据
 * */
export const formatJsonToUrlParams = (data: instanceObject) => {
  return typeof data === 'object'
    ? Object.keys(data)
        .map((key) => {
          return `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`;
        })
        .join('&')
    : '';
};

export const formatDate = (date: string, format = 'YYYY-MM-DD HH:mm:ss') => {
  return dayjs(date).format(format);
};
