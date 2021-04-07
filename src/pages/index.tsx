import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { HashRouter as Router } from 'react-router-dom';
import { Layout, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import IndexContent from '$layout/indexContent';
import EditorStore from '$store';
import '$assets/css/reset.css'; // 引入公共的css样式文件
import './index.scss';

/**
 * 首页
 */
class IndexPage extends React.PureComponent {
  constructor(props: any) {
    super(props);
  }

  /**
   * 顶层路由统一在 PageContent 中管理
   *
   * +--------------------+
   * |     CommonHeader     |
   * +--------------------+
   * |                    |
   * |     PageContent    |
   * |                    |
   * +--------------------+
   * |     CommonFooter     |
   * +--------------------+
   */

  render() {
    return (
      <ConfigProvider locale={zhCN} autoInsertSpaceInButton={false}>
        <Layout>
          <IndexContent />
        </Layout>
      </ConfigProvider>
    );
  }
}

ReactDOM.render(
  <Provider uiStore={EditorStore.uiStore}>
    <Router>
      <IndexPage />
    </Router>
  </Provider>,
  document.getElementById('UIWidget'),
);
