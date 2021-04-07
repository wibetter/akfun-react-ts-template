import * as React from 'react';
import { Button, Result } from 'antd';
import PageList from '$common/PageList';

const PageNotFound: React.FC = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="你进入了无人区！"
      style={{
        position: 'relative',
        zIndex: 3,
      }}
      extra={
        <Button
          type="primary"
          onClick={() => {
            window.location.href = `${PageList.index}`;
          }}
        >
          回首页看看
        </Button>
      }
    />
  );
};

export default PageNotFound;
