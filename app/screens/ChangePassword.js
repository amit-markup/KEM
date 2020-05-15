import React, {Component} from 'react';
import {Platform, StyleSheet, View, ScrollView, Image, TouchableOpacity, AsyncStorage, ImageBackground} from 'react-native';
import styles from '../../assets/style/style';
import { Container, Header, Content, Button, Card, CardItem,
	 Text, Body, Form, Item } from 'native-base';
import { CheckBox, Avatar, Icon, Input, Overlay } from 'react-native-elements';
// import Errors from '../Components/Errors';
// import API from '../Api/Api';
// import Loader from '../Components/Loader';
// import URI from '../Api/URI';
// import Common from '../Containers/Common';
import LinearGradient from 'react-native-linear-gradient';

export default class ChangePassword extends Component {
	constructor(props) {
        super(props)
        this.state = {
            password: '',
            confirmPassword: '',
            loading: false,
            errors: [],
            submit: false,
        }
        // this.common = new Common();
    }


    displayErrors(error) {
        var errors = [];
        errors.push(error);
        this.setState({errors: errors})	
    }

    validate() {
        var messages = [];
        this.setState({submit:true});
        messages.push(!this.state.password  && 'Password required');
		messages.push(!this.state.confirmPassword  && 'Confirmation Password required');
		if(this.state.password && this.state.confirmPassword) {
			if(this.state.password != this.state.confirmPassword) {
				messages.push("Both password should be same");
			}
		}
        
        var errorShow = [];
        messages = messages.filter( (msg) => {
			if(msg) {
				return msg;
			}
		})
		for(var i=0; i<messages.length; i++) {
			var required = messages[i].indexOf('required');
			if(required > 0) {
				
			}
			else {
				errorShow.push(messages[i]);
			}
		}
		this.setState({ errors: errorShow});
		if(messages.length > 0) {
			return false;
		}
		else {
			return true;
		}
    }

    changePassword() {
        var user = this.props.navigation.getParam('user');
        console.log('user', user)
        var otp = this.props.navigation.getParam('otp');
        console.log('otp', otp)
        if(this.validate()) {
            var data = {userid: user.userid, oldpassword: otp, newpassword: this.state.password, confirmpassword: this.state.confirmPassword};
            var response = new API('ChangePassword',data).getResponse();
            response.then( result => {
                if(result.statuscode == 200) {
                    this.success(user);
                }
                else {
                    this.displayErrors(result.message);
                }
            }).catch( (error) => {
                this.displayErrors(error);
            })
        }
    }

    async success(profile) {
		await AsyncStorage.setItem("roleid",profile.RoleId);
		await AsyncStorage.setItem("userid",profile.userid);
		await AsyncStorage.setItem("authToken",profile.AuthToken);
		await AsyncStorage.setItem("profile", JSON.stringify(profile));
		if(profile.RoleId == 2) {
			this.props.navigation.navigate('RealEstateHome')
		}
		else if(profile.RoleId == 3) {
			this.props.navigation.navigate('CompanyHome')
		}
		else if(profile.RoleId == 4) {
			this.props.navigation.navigate('InspectorHome')
		}
	}

    render() {
        var password = !this.state.password && this.state.submit ? true : false;
        var confirmPassword = !this.state.confirmPassword && this.state.submit ? true : false;
        
        return (
           
            <ImageBackground source={require("../../assets/images/background.png")} style={styles.forgotPasswordContainer}>
                <View style={{flexDirection:'row', width:"100%"}}>
                    <View style={{width:"33%"}}>
                        <Image source={require("../../assets/images/back-arrow.png")} style={{width:20, height:20}} />
                    </View>
                    <View>
                        <Text styles={{ color:'#fff'}}>Enter New Password</Text>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', }}>
                <Item style={styles.formItem}>
                    <Input secureTextEntry={true} inputContainerStyle={password && styles.inputError} rightIcon={password && this.common.getIcon()} errorMessage={password && 'Password Required'} value={this.state.password} onChangeText={(text) => this.setState({'password': text})}  placeholder="ENTER NEW PASSWORD" inputStyle={[styles.font15]}  />
                </Item>
                <Item style={styles.formItem}>
                    <Input secureTextEntry={true} inputContainerStyle={confirmPassword && styles.inputError} rightIcon={confirmPassword && this.common.getIcon()} errorMessage={confirmPassword && 'ENTER CONFIRM PASSWORD'} value={this.state.confirmPassword} onChangeText={(text) => this.setState({'confirmPassword': text})}  placeholder="ENTER CONFIRM PASSWORD" inputStyle={[styles.font15]}  />
                </Item>
                <TouchableOpacity>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#05544e', '#0c8e86', '#0c8e86']} style={[styles.buttonContainer]}>
                            <Text style={[styles.loginText, {color:'#fff'}]}>UPDATE</Text>
                         </LinearGradient>
                        </TouchableOpacity>
                        </View>
            </ImageBackground>
            
        );
    }
}