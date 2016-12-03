import React, {Component} from 'react';
import {Scene, Router, ActionConst} from 'react-native-router-flux';
import SplashScreenComponent from './SplashScreen/SplashScreenComponent';
import DashboardComponent from './Dashboard/DashboardComponent';

class App extends Component {
    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar>
                    <Scene key="splashscreen" component={SplashScreenComponent} initial={true}/>
                    <Scene key="dashboard" component={DashboardComponent} title="Dashboard" hideNavBar={false}
                           type={ActionConst.RESET}/>
                </Scene>
            </Router>
        );
    }
}

export default App;