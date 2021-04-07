import React from 'react';
import { Spin } from 'antd';
import { inject } from 'mobx-react';
import { GlobalStores } from '$store';

/**
 * 全局 App 级别 loading 组件，
 *    1、可使用全局 store 控制显示。     调用 ：stores.uiStore.toggleAppLoading(true)
 *    2、可直接引用在页面组件过程中显示。  直接传入 props：showLoading: true
 * @param props
 * @constructor
 */
const GlobalLoading: React.FC<{
  showAppLoading?: boolean;
}> = props => {
  const { showAppLoading } = props;

  return showAppLoading ? (
    <Spin
      tip="请耐心稍等，马上就好..."
      spinning={true}
      size="large"
      delay={100}
      style={{
        position: 'fixed',
        width: '100%',
        height: '100vh',
        left: '0',
        top: '0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        opacity: 0.45,
        zIndex: 9999,
      }}
    />
  ) : null;
};

export default inject((stores: GlobalStores) => ({
  showAppLoading: stores.uiStore.showAppLoading,
}))(GlobalLoading);
