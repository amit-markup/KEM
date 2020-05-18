import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { fromRight } from 'react-navigation-transitions';
import React from 'react';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import ForgotPassword1 from '../screens/ForgotPassword1';
import ForgotPassword2 from '../screens/ForgotPassword2';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';

const loginStack = createStackNavigator({
    Splash: {
        screen: Splash,
        navigationOptions: {
            header: () => null,
            headerTitle: 'Splash'
        },
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: () => null,
            headerTitle: 'Login'
        },
    },
    ForgotPassword1: {
        screen: ForgotPassword1,
        navigationOptions: {
            header: () => null,
            headerTitle: 'ForgotPassword1'
        },
    },
    ForgotPassword2: {
        screen: ForgotPassword2,
        navigationOptions: {
            header: () => null,
            headerTitle: 'Login'
        },
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            header: () => null,
            headerTitle: 'SignUp'
        },
    },
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null,
            headerTitle: 'Home'
        },
    },
},
    {
        initialRouteName: 'Splash',
        //transitionConfig: () => fromRight(200),
    }
);



const App = createSwitchNavigator({
    Login: {
        screen: loginStack,
    },
});

const AppContainer = createAppContainer(App);

export default class RoutingScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return <AppContainer />;
    }
}
console.disableYellowBox = true;