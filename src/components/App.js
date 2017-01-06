import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Scene, Router, ActionConst} from 'react-native-router-flux';
import {MenuContext} from 'react-native-popup-menu';
import AndroidSMS from 'react-native-sms-android'

import SplashScreenComponent from './SplashScreen/SplashScreenComponent';
import DashboardContainer from './Dashboard/DashboardContainer';
import AddContactContainer from './AddContact/AddContactContainer';
import EditRulesComponent from './EditRules/EditRulesComponent';
import AddRuleContainer from './AddRule/AddRuleContainer';

import mdStyle from '../styles/material-design';

class App extends Component {

    watchID: ?number = null;

    sendTexts(location) {
        for (let contact of this.props.contacts) {
            for (let rule of contact.rules) {
                if (rule.type === 'location') {
                    // AndroidSMS.sms(
                    //     contact.phoneNumber,
                    //     rule.text,
                    //     'sendDirect',
                    //     (err, message) => {
                    //         if (err){
                    //             console.log("error");
                    //         } else {
                    //             console.log(message);
                    //         }
                    //     }
                    // )
                }
            }
        }
    }

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
            this.sendTexts(position.coords);
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

const mapStateToProps = state => ({
   contacts: state.contacts
});

const mapDispatchToProps = dispatch => ({
    updateLocation: (pos) => dispatch({type: 'UPDATE_LOCATION', payload: pos})
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
