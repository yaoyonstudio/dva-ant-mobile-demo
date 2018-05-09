import React from 'react';
import styles from './Common.scss'

const goBack = (params) => {
  if (typeof params === 'function') {
    params()
    return
  }
  if (!window) return
  window.history.back()
}

const AppHeader = ({title, back, right, children}) => {
  return (
    <div className={styles.AppHeader}>
      {back && <span onClick={() => goBack(back)} className={styles.backIcon}></span>}
      <h2>{title}</h2>
      {right && <div className={styles.rightIcon}>{right()}</div>}
    </div>
  );
};

AppHeader.propTypes = {
};

export default AppHeader;
