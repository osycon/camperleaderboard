import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/users';
import Main from './Main';

const mapStateToProps = state => {
  return {
    // users: state.users,
    selectedUsers: state.selectedUsers,
    items: state.items,
    itemsHasErrored: state.itemsHasErrored,
    itemsIsLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (url, userGroup) => dispatch(itemsFetchData(url, userGroup))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
