/**
 * 格式化时间
 * @param time 时间字符串
 * @param containsSec 是否包含 秒
 */
export function formatTime(time: string, containsSec?: boolean) {
  let temp = `${
    new Date(time).getFullYear() < 10
      ? `0${new Date(time).getFullYear()}`
      : new Date(time).getFullYear()
  }-${
    new Date(time).getMonth() < 9
      ? `0${new Date(time).getMonth() + 1}`
      : new Date(time).getMonth() + 1
  }-${
    new Date(time).getDate() < 10
      ? `0${new Date(time).getDate()}`
      : new Date(time).getDate()
  } ${
    new Date(time).getHours() < 10
      ? `0${new Date(time).getHours()}`
      : new Date(time).getHours()
  }:${
    new Date(time).getMinutes() < 10
      ? `0${new Date(time).getMinutes()}`
      : new Date(time).getMinutes()
  }`;
  if (containsSec) {
    temp += `:${
      new Date(time).getSeconds() < 10
        ? `0${new Date(time).getSeconds()}`
        : new Date(time).getSeconds()
    }`;
  }
  return temp;
}

/**
 * 格式化时间
 * @param time 时间字符串
 * @param containsSec 是否包含 秒
 */
export function formatTimeWithLine(time: string, containsSec?: boolean) {
  let temp = `${
    new Date(time).getFullYear() < 10
      ? `0${new Date(time).getFullYear()}`
      : new Date(time).getFullYear()
  }/${
    new Date(time).getMonth() < 9
      ? `0${new Date(time).getMonth() + 1}`
      : new Date(time).getMonth() + 1
  }/${
    new Date(time).getDate() < 10
      ? `0${new Date(time).getDate()}`
      : new Date(time).getDate()
  } ${
    new Date(time).getHours() < 10
      ? `0${new Date(time).getHours()}`
      : new Date(time).getHours()
  }:${
    new Date(time).getMinutes() < 10
      ? `0${new Date(time).getMinutes()}`
      : new Date(time).getMinutes()
  }`;
  if (containsSec) {
    temp += `:${
      new Date(time).getSeconds() < 10
        ? `0${new Date(time).getSeconds()}`
        : new Date(time).getSeconds()
    }`;
  }
  return temp;
}

/**
 * 格式化日期
 * @param time 时间字符串
 */
export function formatDateWithoutTime(time: string) {
  return `${
    new Date(time).getFullYear() < 10
      ? `0${new Date(time).getFullYear()}`
      : new Date(time).getFullYear()
  }-${
    new Date(time).getMonth() < 9
      ? `0${new Date(time).getMonth() + 1}`
      : new Date(time).getMonth() + 1
  }-${
    new Date(time).getDate() < 10
      ? `0${new Date(time).getDate()}`
      : new Date(time).getDate()
  }`;
}
