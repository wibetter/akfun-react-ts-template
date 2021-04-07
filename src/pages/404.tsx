import * as React from 'react';
import ReactDOM from 'react-dom';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import PageNotFound from '$components/PageNotFound';
import '$assets/css/reset.css'; // 引入公共的css样式文件

class NotFoundPage extends React.PureComponent {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <ConfigProvider locale={zhCN} autoInsertSpaceInButton={false}>
        <PageNotFound />
      </ConfigProvider>
    );
  }
}

ReactDOM.render(<NotFoundPage />, document.getElementById('NotFoundPage'));
