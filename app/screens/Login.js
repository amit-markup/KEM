import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ImageBackground
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      remember: false,
      loading: false,
    }
  }


  render() {
    return (
      <ImageBackground style={styles.container} source={require("../../assets/images/background.png")}>
        <View style={{ position: 'absolute', top: 80 }}>
          <Image style={{ width: 150, height: 150 }} resizeMode="contain" source={require('../../assets/images/logo.png')} />
          <Text style={{ fontSize: 18, alignSelf: 'center' }}>LOGIN</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid='transparent' />
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid='transparent' />
        </View>
        {/* <View style={{flexDirection:'row', width:"100%",marginBottom:60, paddingLeft:35,top:50,}}>
        <TouchableOpacity style={{width:'50%', alignSelf:'flex-start'}}>
            <Text style={{fontSize:12}}>Remember Me</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> this.props.navigation.navigate("ForgotPassword1")} style={{width:'50%', alignSelf:'flex-end'}}>
            <Text style={{fontSize:12}}>Forgot Password?</Text>
        </TouchableOpacity>
    </View> */}

        <View style={[styles.rememberAndForgotWrapper, {width:"90%"}]}>
          <View style={{flexDirection:'row', width:"50%"}}>
            <View style={{width:15,}}>
            <CheckBox checked={this.state.remember} onPress={() => this.setState({ remember: !this.state.remember })} checkedColor="#28558E" size={16} containerStyle={{}} />
            </View>
            <View style={{marginLeft:26, marginTop:14}}>
            <Text style={{}}>Remember Me</Text>
            </View>
          </View>
          <View style={{width:"50%", marginLeft:45, marginTop:14}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPassword1')}>
              <Text style={[styles.font14]}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#05544e', '#0c8e86', '#0c8e86']} style={[styles.buttonContainer]}>
          <Text style={styles.loginText}>LOGIN</Text>
        </LinearGradient>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B0E0E6',
  },
  font14: {
    fontSize: 14,
  },
  loginContainerStyle: { paddingTop: 0, marginTop: 3 },
  loginCheckbox: {
    borderColor: '#ccc',
    borderWidth: 1,
  },

  row: {
    flexDirection: 'row',
  },
  rememberAndForgotWrapper: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 5,
  },
  inputContainer: {
    //   borderBottomColor: '#F5FCFF',
    //   backgroundColor: '#FFFFFF',
    top: 50,
    borderRadius: 30,
    borderBottomWidth: 2,
    width: "90%",
    height: 45,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  icon: {
    width: 30,
    height: 30,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 320,
    borderRadius: 6,
    top: 50,
  },
  loginButton: {
    backgroundColor: '#3498db',
  },
  fabookButton: {
    backgroundColor: "#3b5998",
  },
  googleButton: {
    backgroundColor: "#ff0000",
  },
  loginText: {
    color: 'white',
  },
  //   restoreButtonContainer:{
  //     width:320,
  //     marginBottom:15,
  //     alignItems: 'flex-end'
  //   },
  //   restoreButtonContainers:{
  //     width:320,
  //     marginBottom:15,
  //     alignItems: 'flex-start'
  //   },
  socialButtonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    color: "#FFFFFF",
    marginRight: 5
  }
});