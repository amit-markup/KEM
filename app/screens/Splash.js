import React from 'react';
import { View, Image, StatusBar } from 'react-native';
import styles from '../../assets/style/style';
import { SafeAreaView, StackActions, NavigationActions } from 'react-navigation';

class Splash extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
            
        }

       this.navigateToIntro();
       
    }

    navigateToIntro(){
        console.log("test", "in this")
        let that = this;
        setTimeout(function(){ that.setIntroStack(); }, 3000);
    }

    setIntroStack(){
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Login' })],
        });
        this.props.navigation.dispatch(resetAction);
    }

    // componentDidMount(){
    //     this._bootstrapAsync();
    // }
 
    //  _bootstrapAsync = async () => {
    //      var id = JSON.parse(await AsyncStorage.getItem("id"));
    //      var DeviceToken = JSON.parse(await AsyncStorage.getItem("DeviceToken"));
    //      setTimeout( () => {
    //         if(id){
    //             this.props.navigation.navigate('Driver')
    //         }
    //         else if(DeviceToken){
    //             this.props.navigation.navigate('Business')
    //         }
    //         else {
    //             this.props.navigation.navigate('SelectProfession');
    //         }
    //      },3000)
    //  };

    
    render(){

        
        return(
            <View style={styles.splash}>
                <Image style={styles.imageThumbnail} resizeMode="contain" source = {require('../../assets/images/splash.png')} />
                <StatusBar backgroundColor="#28558E" barStyle="light-content" />
            </View>
            
        )
    }

}

export default Splash;