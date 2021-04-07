import * as React from 'react';
import { inject } from 'mobx-react';
import {
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from 'react-router-dom';
import Helmet from 'react-helmet';
import { Layout } from 'antd';
import { GlobalStores } from '$store';
import PageNotFound from '$components/PageNotFound';
import UIWidget from '$components/UIWidget'; // UI组件内容
import { PageDefaultTitle } from '$layout/PageTitle';
import * as API from '$api';
import './index.scss';

type IProps = {
  login?: any;
  currentUser?: API.User | null;
} & RouteComponentProps;

// @ts-ignore
function RouteWithTitle({ title, ...props }) {
  document.title = title; // 设置页面Title
  // 备注：Helmet用于动态设置document.title
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Route {...props} />
    </>
  );
}

/**
 * 首页
 */
class IndexContent extends React.PureComponent<IProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Layout.Content className="index-layout-content">
        <Switch>
          {/* 默认路由：组件内容 */}
          <RouteWithTitle
            path="/"
            title={`UI组件-${PageDefaultTitle}`}
            component={UIWidget}
            exact
          />

          {/* 404 */}
          <RouteWithTitle
            path="/pageNotFound"
            component={PageNotFound}
            title={`404-${PageDefaultTitle}`}
            exact
          />

          <Redirect from="*" to="/pageNotFound" exact />
        </Switch>
      </Layout.Content>
    );
  }
}
export default inject((stores: GlobalStores) => ({
  login: stores.uiStore.login,
  currentUser: stores.uiStore.currentUser,
}))(withRouter(IndexContent));
