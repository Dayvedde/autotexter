import React, {Component} from 'react';
import {Scene, Router, ActionConst} from 'react-native-router-flux';

import SplashScreenComponent from './SplashScreen/SplashScreenComponent';
import DashboardComponent from './Dashboard/DashboardComponent';
import AddContactComponent from './AddContact/AddContactComponent';

import mdStyle from '../styles/material-design';

class App extends Component {
    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar navigationBarStyle={mdStyle.navBar}>
                    <Scene key="splashscreen" component={SplashScreenComponent}/>
                    <Scene initial={true} key="dashboard" component={DashboardComponent} title="Dashboard"
                           hideNavBar={false}
                           type={ActionConst.RESET}/>
                    <Scene key="addContact" title="Add Contact" component={AddContactComponent}/>

                </Scene>
            </Router>
        );
    }
}

export default App;