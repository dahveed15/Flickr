import { connect } from 'react-redux';
import SignUpForm from './signup';
import { signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.sessionErrors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: formUser => dispatch(signup(formUser)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);