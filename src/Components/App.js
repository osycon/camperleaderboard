import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { usersFetchData } from '../actions/users';
import Main from './Main';

const mapStateToProps = state => {
  return {
    users: state.users,
    selectedUsers: state.selectedUsers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: userGroup => dispatch(usersFetchData(userGroup))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
