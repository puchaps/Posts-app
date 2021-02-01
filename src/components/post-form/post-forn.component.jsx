import { connect } from 'react-redux';

import { changeVlueFromInputAC } from '../../redux/reducers/actions/post.actions';
import { selectorChoosedQuantityPosts } from '../../redux/reducers/selectors/post.selectors';
import { getPostSFromDBthunk } from '../../redux/reducers/thunks/post.thunks';

import './post.from.styles.scss';

const PostFrom = ({ changeValueFromInput, getPostFromBD, choosedQuantityPosts }) => {
  const handleSumbit = (e) => {
    e.preventDefault();

    getPostFromBD();
  };

  return (
    <form className="post-form" onSubmit = {handleSumbit}>
      <div className="post-form-descr">Quantity Posts:</div>
      <input 
        type="number"
        onChange = {(e) => changeValueFromInput(e.target.value)}
        min="1" max="10"
        value = {choosedQuantityPosts}
      />
      <button type='submit'>
        GENERATE
      </button>
    </form>
  );
};

const mapStateToProps = state =>({
  choosedQuantityPosts: selectorChoosedQuantityPosts(state)
});

const mapDistatchToProps = dispatch => ({
  changeValueFromInput: (value) => dispatch(changeVlueFromInputAC(value)) ,
  getPostFromBD: () => dispatch(getPostSFromDBthunk())
});

export default connect(
  mapStateToProps,
  mapDistatchToProps
)(PostFrom);