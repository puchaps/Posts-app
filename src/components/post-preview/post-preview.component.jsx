import { connect } from 'react-redux';

import { selectorPosts } from '../../redux/reducers/selectors/post.selectors';

import './post-preview.styles.scss';

import PostItem from '../post-item/post-item.component';

const PostPreview = ({ posts }) => {
  return (
    <div className="post-pveview">
      {
        posts.map( ({id, ...otherProps}) => <PostItem key = {id} {...otherProps}/>)
      }
    </div>
  );
};

const mapStateToProps = state => ({
  posts: selectorPosts(state)
});

export default connect(
  mapStateToProps
)(PostPreview);