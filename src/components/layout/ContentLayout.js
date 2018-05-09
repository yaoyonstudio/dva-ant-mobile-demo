import React from 'react';
import AppHeader from '../common/AppHeader'
import styles from './Layout.scss'

const ContentLayout = ({title, back, right, history, children}) => {
  return (
    <div className={styles.MainLayout}>
      <AppHeader title={title} back={back} right={right}>
        {/* {right && <div>{right()}</div>} */}
      </AppHeader>
      <div className={styles.Main + ' ' + styles.ContentLayout}>
        {children}
      </div>
    </div>
  );
};

ContentLayout.propTypes = {
};

export default ContentLayout;
