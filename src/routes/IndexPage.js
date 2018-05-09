import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.scss';

const IndexPage = ({example, dispatch}) => {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div>
        <p>{example.user.name}: {example.user.age}</p>
        <button onClick={() => dispatch({type: 'example/add'})}>ADD</button>
        <button onClick={() => dispatch({type: 'example/minus'})}>MINUS</button>
      </div>
      <div>
        <button onClick={() => dispatch({type: 'example/getPosts', payload: {}})}>GET POSTS</button>
        {example.loading && <p>数据正在加载中...</p>}
        <ul>
          {example.posts.map((item, index) => <li key={index}>{item.title}</li>)}
        </ul>
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

const mapStateToProps = (state) => {
  return {
    example: state.example
  }
}

export default connect(mapStateToProps)(IndexPage);
