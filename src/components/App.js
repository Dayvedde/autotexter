import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Scene, Router, ActionConst} from 'react-native-router-flux';
import {MenuContext} from 'react-native-popup-menu';

import SplashScreenComponent from './SplashScreen/SplashScreenComponent';
import DashboardContainer from './Dashboard/DashboardContainer';
import AddContactContainer from './AddContact/AddContactContainer';
import EditRulesComponent from './EditRules/EditRulesComponent';
import AddRuleContainer from './AddRule/AddRuleContainer';

import mdStyle from '../styles/material-design';

class App extends Component {

    watchID: ?number = null;

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.props.updateLocation(position.coords);
            },
            (error) => console.log(error),
            {enableHighAccuracy: true, timeout: 5000, maximumAge: 1000}
        );
        this.watchID = navigator.geolocation.watchPosition((position) => {
            this.props.updateLocation(position.coords);
        });
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    render() {
        return (
            <MenuContext>
                <Router>
                    <Scene key="root" hideNavBar navigationBarStyle={mdStyle.navBar}>
                        <Scene key="splashscreen" component={SplashScreenComponent}/>
                        <Scene initial={true} key="dashboard" component={DashboardContainer} title="Dashboard"
                               hideNavBar={false}
                               type={ActionConst.RESET}/>
                        <Scene key="addContact" title="Add Contact" component={AddContactContainer}/>
                        <Scene key="editRules" component={EditRulesComponent}/>
                        <Scene key="addRule" title="Add Rule" component={AddRuleContainer}/>
                    </Scene>
                </Router>
            </MenuContext>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateLocation: (pos) => dispatch({type: 'UPDATE_LOCATION', payload: pos})
});

export default connect(
    null,
    mapDispatchToProps
)(App);
