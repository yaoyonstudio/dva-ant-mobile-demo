import React from 'react';
import { connect } from 'dva';
import ContentLayout from '../../components/layout/ContentLayout'
import Loading from '../../components/common/Loading'
import styles from './DetailPage.scss'

const share = (post) => {
  console.log('share:', post)
}

const ShareIcon = (post) => {
  return (
    <span onClick={() => share(post)} className={styles.ShareIcon}></span>
  )
}

const DetailPage = ({post, loading, history, dispatch}) => {
  let _content = post.content && post.content.rendered
  return (
    <ContentLayout back right={() => ShareIcon(post)} history={history} title="文章详情">
      <div className={styles.postDetail}>
        <h2 className={styles.title}>{post.title}</h2>
        <section className={styles.meta}>
          <span>{post.authorName}</span>
          <span>{post.commentNums}</span>
          <span>{post.datestr}</span>
        </section>
        <article className={styles.content} dangerouslySetInnerHTML={{__html: _content}}></article>
        {loading && <Loading />}
      </div>
    </ContentLayout>
  );
}

DetailPage.propTypes = {
};

const mapStateToProps = (state) => {
  const { post, loading } = state.posts
  return {
    post, loading
  }
}

export default connect(mapStateToProps)(DetailPage);
