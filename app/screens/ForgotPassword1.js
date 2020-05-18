import React, { Component } from 'react';
import { Platform, StyleSheet, View, KeyboardAvoidingView, SafeAreaView, ScrollView, Image, TouchableOpacity, AsyncStorage, ImageBackground } from 'react-native';
import styles from '../../assets/style/style';
import {
    Container, Header, Content, Button, Card, CardItem,
    Text, Body, Form, Item
} from 'native-base';
import { CheckBox, Avatar, Icon, Input, Overlay } from 'react-native-elements';
// import Errors from '../Components/Errors';
// import API from '../Api/Api';
// import Loader from '../Components/Loader';
import LinearGradient from 'react-native-linear-gradient';

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            otp1: '',
            otp2: '',
            otp3: '',
            otp4: '',
            otp5: '',
            otp6: '',
            errors: '',
            role: 0,
            loading: false,
            submit: false,
            isVisible: false,
            otp: "",
            otpSubmit: false,
            otpResponse: [],
            otpError: [],
        }
        //this.common = new Common();
    }

    // componentDidMount() {
    //     var role = this.props.navigation.getParam('role');
    //     this.setState({ role: role });
    // }
    back() {
        this.setState({ isVisible: false });
    }
    
    displayErrors(error, flag = 0) {
        this.common.showToast(error);
    }

    validateOtp() {
        this.setState({ otpSubmit: true })
        if (!this.state.otp1) {
            this.displayErrors("Please Enter Your OTP", 1);
        }
        else if (!this.state.otp2) {
            this.displayErrors("Please Enter Your OTP", 1);
        }
        else if (!this.state.otp3) {
            this.displayErrors("Please Enter Your OTP", 1);
        }
        else if (!this.state.otp4) {
            this.displayErrors("Please Enter Your OTP", 1);
        }
        else if (!this.state.otp5) {
            this.displayErrors("Please Enter Your OTP", 1);
        }
        else if (!this.state.otp6) {
            this.displayErrors("Please Enter Your OTP", 1);
        }
        else {
            var finalOtp = this.state.otp1 + this.state.otp2 + this.state.otp3 + this.state.otp4 + this.state.otp5 + this.state.otp6
            //this.setState({ otp: finalOtp.toString() });
            var otp = finalOtp.toString();
            console.log('hello', otp)
            var data = { "username": this.state.email, "password": otp, "roleid": this.state.role };
            console.log("validateOtp request data: ", data);
            var response = new API('Login', data).getResponse();
            console.log("validateOtp response data: ", response);
            response.then(result => {
                console.log("login result: ", result);
                if (result.statuscode == 200 && result.result.userid) {
                    this.setState({ isVisible: false })
                    var user = result.result;
                    this.props.navigation.navigate('ChangePassword', { user: user, otp: otp });
                }
                else {
                    this.displayErrors("Please Enter Your Valid OTP", 1);
                }
            }).catch((error) => {
                this.displayErrors("Error in OTP verification", 1);
            })
        }

    }


    forgot() {
        if (!this.state.email) {
            this.common.showToast('Please Enter your Email')
            this.email.focus()
        }
        else if (this.state.email && !this.common.validateEmail(this.state.email)) {
            this.common.showToast('Please enter your valid Email');
            this.email.focus()
        }
        else {
            var response = new API('ForgotPassword', {}).getApiResponse('?EmailId=' + this.state.email + "&RoleId=" + this.state.role);
            console.log("forgot response: ", response);
            response.then(result => {
                if (result.status == 200) {
                    console.log("forgot response: ", result.data.result);
                    this.setState({ otpResponse: result.data.result, isVisible: true });
                }
                else {
                    this.displayErrors('Not account exist.');
                }
            }).catch(error => {
                this.displayErrors('No account exist');
            })
        }
    }

    goback(){
        this.props.navigation.goBack()
    }

    render() {
        return (
            <ImageBackground source={require("../../assets/images/background.png")} style={styles.forgotPasswordContainer}>
                <View style={{flexDirection:'row', width:"100%"}}>
                    <TouchableOpacity onPress={()=> this.goback()} style={{width:"33%"}}>
                        <Image source={require("../../assets/images/back-arrow.png")} style={{width:20, height:20}} />
                    </TouchableOpacity>
                    <View>
                        <Text style={{ color:'white'}}>Forgot Password</Text>
                    </View>
                </View>
                <Overlay overlayStyle={[styles.otpModel]} isVisible={this.state.isVisible}>
                    <TouchableOpacity onPress={() => this.back()} style={{ alignContent: 'flex-end', alignSelf: 'flex-end', alignItems: 'flex-end', position: 'absolute', paddingBottom: 320, paddingRight: 5, paddingTop: 3 }}>
                        <Icon type="font-awesome" name='times' color="#bfbfbf" size={17} />
                    </TouchableOpacity>
                    <View style={[styles.center, { marginTop: 20 }]}>
                            <Text style={[styles.textCenter, { color: '#333' }]}>OTP has been sent to your email!</Text>
                            <Text style={[styles.textCenter, { color: '#333' }]}>RESEND OTP</Text>
                            <Text onPress={() => this.forgot()} style={{ color: '#28558E', fontSize: 14, marginTop: 5 }}>Click Here</Text>
                        </View>
                    <View>
                    <Item style={styles.formItem}>
                            <Input autoCompleteType="off" ref={email => { this.email = email }} keyboardType="email-address" value={this.state.email} onChangeText={(text) => this.setState({ 'email': text })} placeholder="Email" inputStyle={[styles.font15, {  }]} />
                        </Item>
                    </View>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("ForgotPassword2")}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#05544e', '#0c8e86', '#0c8e86']} style={[styles.buttonContainer]}>
                        <Text style={[styles.loginText, {color:'#fff'}]}>SUBMIT</Text>
                        </LinearGradient>
                        </TouchableOpacity>
                </Overlay>
                <View style={{ flex: 1, justifyContent: 'center', }}>
                    <View style={{ paddingBottom: 30, width:"95%", alignSelf:'center' }}>
                        <Text style={{ color: '#333' }}>No Worries, it happens . Enter your email and we will send you temporary OTP. Which you can use your new password.</Text>
                    </View>
                    <View>
                        <Item style={styles.formItem}>
                            <Input autoCompleteType="off" ref={email => { this.email = email }} keyboardType="email-address" value={this.state.email} onChangeText={(text) => this.setState({ 'email': text })} placeholder="Email" inputStyle={[styles.font15, {  }]} />
                        </Item>
                        <TouchableOpacity onPress={()=> this.setState({isVisible:true})}>
                        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#05544e', '#0c8e86', '#0c8e86']} style={[styles.buttonContainer]}>
                            <Text style={[styles.loginText, {color:'#fff'}]}>SUBMIT</Text>
                         </LinearGradient>
                        </TouchableOpacity>
                        {/* <View style={[styles.center, { marginTop: 20 }]}>
                            <Text style={[styles.textCenter, { color: '#877f7f' }]}>If you have not received an OTP then </Text>
                            <Text onPress={() => this.forgot()} style={{ color: '#28558E', fontSize: 14, marginTop: 5 }}>Click Here</Text>
                        </View> */}
                    </View>
                </View>
            </ImageBackground>
        );
    }
}