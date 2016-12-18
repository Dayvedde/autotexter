import React, {Component} from 'react';
import {Scene, Router, ActionConst} from 'react-native-router-flux';

import SplashScreenComponent from './SplashScreen/SplashScreenComponent';
import DashboardComponent from './Dashboard/DashboardComponent';
import AddContactComponent from './AddContact/AddContactComponent';

import navbarStyle from '../styles/navbar';

class App extends Component {
    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar navigationBarStyle={navbarStyle}>
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