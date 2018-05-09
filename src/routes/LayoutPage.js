import React from 'react';
import { connect } from 'dva';
import MainLayout from '../../components/layout/MainLayout'


const LayoutPage = ({example, history, dispatch}) => {
  return (
    <MainLayout history={history} title="首页">
      <div>
        <h1>Layout Page</h1>
      </div>
    </MainLayout>
  );
}

LayoutPage.propTypes = {
};

const mapStateToProps = (state) => {
  return {
    main: state.main
  }
}

export default connect(mapStateToProps)(LayoutPage);
