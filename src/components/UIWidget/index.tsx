import * as React from 'react';
import { inject } from 'mobx-react';
// import { Breadcrumb, Menu, Button, Card } from 'antd';
import * as API from '$api';
import { GlobalStores } from '$store';
import './index.scss';

type IProps = {
  currentUser?: API.User | null;
};

/** UI组件内容 */
class UIWidget extends React.PureComponent<IProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="ui-widget-info">
        <h1>hello，UI组件</h1>
      </div>
    );
  }
}

export default inject((stores: GlobalStores) => ({
  currentUser: stores.uiStore.currentUser,
}))(UIWidget);
