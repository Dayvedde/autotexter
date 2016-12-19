import React, {Component} from 'react';
import {Scene, Router, ActionConst} from 'react-native-router-flux';

import SplashScreenComponent from './SplashScreen/SplashScreenComponent';
import DashboardContainer from './Dashboard/DashboardContainer';
import AddContactContainer from './AddContact/AddContactContainer';

import mdStyle from '../styles/material-design';

class App extends Component {
    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar navigationBarStyle={mdStyle.navBar}>
                    <Scene key="splashscreen" component={SplashScreenComponent}/>
                    <Scene initial={true} key="dashboard" component={DashboardContainer} title="Dashboard"
                           hideNavBar={false}
                           type={ActionConst.RESET}/>
                    <Scene key="addContact" title="Add Contact" component={AddContactContainer}/>

                </Scene>
            </Router>
        );
    }
}

export default App;