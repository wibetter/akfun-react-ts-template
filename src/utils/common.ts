/** 对比两个json数据是否相等 */
export function isEqual(targetObj: any, nextTargetObj: any) {
  return JSON.stringify(targetObj) === JSON.stringify(nextTargetObj);
}

/**
 *  判断是否是数组类型
 */
export function isArray(curObj: any) {
  if (Object.prototype.toString.call(curObj).slice(8, -1) === 'Array') {
    return true;
  } else {
    return false;
  }
}

/**
 *  判断是否是对象类型
 */
export function isObject(curObj: any) {
  if (Object.prototype.toString.call(curObj).slice(8, -1) === 'Object') {
    return true;
  } else {
    return false;
  }
}

/**
 * 获取当前url中的所有参数
 */
export function getParams(): any {
  let params = location.search;
  if (!params) {
    const currentHref = location.href;
    const startIndex = currentHref.lastIndexOf('?');
    params = currentHref.substring(startIndex);
  }
  const paramsObj = {};
  if (params) {
    const arr = params.substr(1).split('&');
    for (let i = 0, size = arr.length; i < size; i++) {
      const data = arr[i].split('=');
      if (data[0] && data[1]) {
        paramsObj[data[0]] = data[1];
      }
    }
  }
  return paramsObj;
}
/**
 * 获取当前url中的指定参数
 */
export function getURLParam(key: string): string {
  let params = location.search;
  if (!params) {
    const currentHref = location.href;
    const startIndex = currentHref.lastIndexOf('?');
    params = currentHref.substring(startIndex);
  }
  if (params) {
    const arr = params.substr(1).split('&');
    for (let i = 0, size = arr.length; i < size; i++) {
      const data = arr[i].split('=');
      if (data[0] === key) {
        return data[1];
      }
    }
  }
  return '';
}

/**
 * 获取父级窗体的url中的指定参数
 */
export function getParentURLParam(key: string): string {
  let params = parent.window.location.search;
  if (!params) {
    const currentHref = parent.window.location.href;
    const startIndex = currentHref.lastIndexOf('?');
    params = currentHref.substring(startIndex);
  }
  if (params) {
    const arr = params.substr(1).split('&');
    for (let i = 0, size = arr.length; i < size; i++) {
      const data = arr[i].split('=');
      if (data[0] === key) {
        return data[1];
      }
    }
  }
  return '';
}

/**
 * timeStamp：其他格式的时间值，比如：13位时间戳
 * format: 链接格式如'.','-',/''
 */
export const formatDate = (timeStamp: any, format = '/') => {
  if (!timeStamp) {
    return '';
  }
  const time = new Date(timeStamp);
  const timeObj = {
    year: time.getFullYear(),
    month: time.getMonth() + 1,
    day: time.getDate(),
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
    millisecond: time.getMilliseconds(),
  };
  return `${timeObj.year}${format}${timeObj.month}${format}${
    timeObj.day
  } ${doubleNum(timeObj.hour)}:${doubleNum(timeObj.minute)}`;
};

/**
 * double num   // 返回值类型唯一，都是字符串
 * @param {Number} num
 */
export const doubleNum = (num: any) => {
  return num < 10 ? '0' + num : '' + num;
};

/* js对象数据深拷贝，避免数据联动 */
export function objClone(targetObj: any) {
  const newObj = JSON.stringify(targetObj);
  return JSON.parse(newObj);
}
