import {connect} from 'react-redux';
import MapComponent from './MapComponent';

const mapStateToProps = state => ({
    lastPosition: state.location.lastPosition
});

export default connect(
    mapStateToProps
)(MapComponent);