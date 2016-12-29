import {connect} from 'react-redux';
import {formValueSelector} from 'redux-form';
import AddRuleComponent from './AddRuleComponent';

const selector = formValueSelector('loginForm');

const mapStateToProps = state => ({
    description: selector(state, 'description'),
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddRuleComponent);