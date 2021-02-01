import { connect } from 'react-redux';

import { selectorLoader } from '../../redux/reducers/selectors/post.selectors';

import './post-block.styles.scss';

import PostFrom from '../post-form/post-forn.component';
import PostPreview from '../post-preview/post-preview.component';
import Loader from '../loader/loader.component';

const PostBlock = ({ loader }) => {
  return (
    <div className="post-block">
      <div className="post-block-title">
        <h1>Posts</h1>
      </div>
      <PostFrom/>
      <Loader loader = {loader}>
        <PostPreview/>
      </Loader>
    </div>
  );
};

const mapStateToProps = state => ({
  loader: selectorLoader(state)
});

export default connect(
  mapStateToProps
)(PostBlock);