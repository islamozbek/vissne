import { connect } from 'react-redux';
import Auth from '../components/auth/Auth';
import {
  login,
  register,
} from '../actions/AuthActions';

const mapStateToProps = state => ({
  isLoggedIn: state.app.isLoggedIn,
  loading: state.common.loading,
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  register: user => dispatch(register(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);
