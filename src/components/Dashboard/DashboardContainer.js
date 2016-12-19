import {connect} from 'react-redux';
import DashboardComponent from './DashboardComponent';

const mapStateToProps = (state) => ({
    contacts: state.contacts.contacts
});

export default connect(
    mapStateToProps
)(DashboardComponent);

