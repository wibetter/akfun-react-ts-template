/**
 * 分页
 */
export interface Pagination {
  /**
   * 当前页
   */
  current: number;
  /**
   * 分页每页size
   */
  pageSize: number;
  /**
   * 总数，接口返回
   */
  total?: number;
  showTotal?: (total: any, range: any) => string;
}

export interface PagerData<T> {
  rows: T[];
  total: number;
}
