import React from 'react';
import loadingSvg from '../../assets/loading.svg'
import styles from './Common.scss'

const Loading = () => {
  return (
    <div className={styles.Loading}>
      <img src={loadingSvg} alt="loading" />
      <p>正在加载中...</p>
    </div>
  );
};

Loading.propTypes = {
};

export default Loading;
