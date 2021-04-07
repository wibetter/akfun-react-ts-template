import { action, observable } from 'mobx';
import * as API from '$api';

class uiStore {
  /** 当前登录用户 */
  @observable
  currentUser: API.User | null = null;

  @observable
  showAppLoading = false;
  @observable
  appFooterShow = true;
  @observable
  appHeaderShow = true;

  @action.bound
  toggleAppLoading(flag: boolean) {
    this.showAppLoading = flag;
  }

  @action.bound
  toggleShowFooter(flag: boolean) {
    this.appFooterShow = flag;
  }

  @action.bound
  toggleShowHeader(flag: boolean) {
    this.appHeaderShow = flag;
  }

  @action.bound
  async login() {
    try {
      const resp = await API.getCurrentUser();
      if (resp.code === 0) {
        this.currentUser = resp.data;
      }
      return resp;
    } catch (e) {
      console.dir(e);
      return Promise.reject(e);
    }
  }

  @action.bound
  async logout() {
    const resp = await API.logout();
    if (resp.code === 0) {
      this.currentUser = null;
    }
    return resp;
  }
}

export default uiStore;
