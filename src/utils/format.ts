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
