import { connect } from 'react-redux';
import { counterPosts } from '../../../redux/postsRedux';
import PostsCounter from './PostCounter';

const mapStateToProps = state => ({
    counter: counterPosts(state),
});

export default connect(mapStateToProps)(PostsCounter);
