import React, {Component} from 'react';
import {Scene, Reducer, Router, Switch, Modal, Actions, ActionConst} from 'react-native-router-flux';
import SplashScreenComponent from './SplashScreen/SplashScreenComponent';
import DashboardComponent from './Dashboard/DashboardComponent';

class App extends Component {
    render() {
        return (
            <Router>
                <Scene key="splashscreen" component={SplashScreenComponent} title="Splash" initial={true}
                       hideNavBar={true}/>
                <Scene key="dashboard" component={DashboardComponent} title="Dashboard"/>
            </Router>
        );
    }
}

export default App;