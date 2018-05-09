import React from 'react';
import { connect } from 'dva';
import ContentLayout from '../components/layout/ContentLayout'

const customBackFun = () => {
  alert('自定义顶栏组件返回事件')
  window.history.back()
}

const TestPage = ({history}) => {
  return (
    <ContentLayout back={customBackFun} history={history} title="测试页面">
      <div>
        <h1>Test Page</h1>
      </div>
    </ContentLayout>
  );
}

TestPage.propTypes = {
};

export default connect()(TestPage);
