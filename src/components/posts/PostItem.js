import React from 'react';
import styles from './PostItem.scss'
import { Link } from 'react-router-dom'


const PostItem = ({ data }) => {
  return (
    <Link to={{ pathname: '/post', search: `?id=${data.id}` }} className={styles.PostItem}>
      <img src={data.thumbnailurl} alt={data.title} />
      <aside>
        <h4>{data.title}</h4>
        <footer>
          <span>{data.authorName}</span>
          <span>{data.commentNums}</span>
          <span>{data.datestr}</span>
        </footer>
      </aside>
    </Link>
  );
};

PostItem.propTypes = {
};

export default PostItem;
