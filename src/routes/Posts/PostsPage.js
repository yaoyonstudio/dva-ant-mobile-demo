import React from 'react';
import { connect } from 'dva';
import MainLayout from '../../components/layout/MainLayout'
import Loading from '../../components/common/Loading'
import PostItem from '../../components/posts/PostItem'
import styles from './PostsPage.scss'

// Stateless 写法

// const PostsPage = ({list, page, loading, hasMore, history, dispatch}) => {
//   return (
//     <MainLayout history={history} title="文章">
//       <div id="list" className={styles.list}>
//         <ul>
//           {list.map((post, index) => <li className={styles.item} key={index}><PostItem key={index} data={post} /></li> )}
//         </ul>
//         {/* <button onClick={() => dispatch({type: 'posts/getPosts', payload: { page: page }})}>下一页</button> */}
//         {loading && <Loading />}
//       </div>
//     </MainLayout>
//   );
// }

class PostsPage extends React.Component {
  componentDidMount () {
    const listEl = document.querySelector('#list')
    listEl.addEventListener('scroll', () => {
      if ((window.innerHeight + listEl.scrollTop) > (listEl.scrollHeight - 50)) {
        if (!this.props.loading && this.props.hasMore) {
          console.log('load more')
          this.props.dispatch({
            type: 'posts/getPosts',
            payload: { page: this.props.page }
          })
        }
      }
    })
  }

  render() {
    const {list, loading, history} = this.props
    return (
      <MainLayout history={history} title="文章">
        <ul id="list" className={styles.list}>
            {list.map((post, index) => <li className={styles.item} key={index}><PostItem key={index} data={post} /></li> )}
          {/* <button onClick={() => dispatch({type: 'posts/getPosts', payload: { page: page }})}>下一页</button> */}
          {loading && <Loading />}
        </ul>
      </MainLayout>
    );
  }
}

PostsPage.propTypes = {
};

const mapStateToProps = (state) => {
  const { list, page, loading, hasMore } = state.posts
  return {
    list, page, loading, hasMore
  }
}

export default connect(mapStateToProps)(PostsPage);
