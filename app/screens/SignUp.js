import React, { Component } from 'react';
import { Platform, StyleSheet, View, ScrollView, ImageBackground, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import styles from '../../assets/style/style';
import {
	Container, Header, Content, Button, Card, CardItem,
	Text, Body, Form, Item, Root
} from 'native-base';
import { CheckBox, Avatar, Input, Icon } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
// import Errors from '../Components/Errors';
// import API from '../Api/Api';
// import Loader from '../Components/Loader';
// import GoogleSearch from '../Components/GoogleSearch';
// import Common from '../Containers/Common';

const options = {
	title: 'Select Picture',
	takePhotoButtonTitle: 'Take Photo',
	chooseFromLibraryButtonTitle: 'Choose from Library',
	mediaType: 'photo',
	cameraType: 'back',
	storageOptions: {
		skipBackup: true,
	},
};

export default class Register extends Component {
	constructor(props) {
		super(props)
		this.state = {
			avatarSource: '',
			profilePic: '',
			errors: [],
			fname: '',
			lname: '',
			title: '',
			email: '',
			phone: '',
			password: '',
			confirmPassword: '',
			role: 2,
			loading: false,
			submit: false,
		}
	}

	// validate = () => {
	// 	var messages = [];
	// 	this.setState({submit:true});
	// 	messages.push(!this.state.avatarSource  && 'Select Profile Pic');
	// 	messages.push(!this.state.fname  && 'First Name required');
	// 	messages.push(!this.state.lname  && 'Last Name required');
	// 	messages.push(!this.state.title  && 'Title required');
	// 	messages.push(!this.state.email  && 'Email required');
	// 	messages.push(!this.state.phone  && 'Phone no required');
	// 	messages.push(!this.state.agencyName  && 'Agency Name required');
	// 	messages.push(!this.state.assistantName  && 'Assistant Name required');
	// 	messages.push(!this.state.assistantEmail  && 'Assistant Email required');
	// 	messages.push(!this.state.address  && 'Address required');
	// 	messages.push(!this.state.password  && 'Password required');
	// 	messages.push(!this.state.confirmPassword  && 'Confirmation Password required');
	// 	if(this.state.password && this.state.confirmPassword) {
	// 		if(this.state.password != this.state.confirmPassword) {
	// 			messages.push("Both password should be same");
	// 		}
	// 	}
	// 	if(this.state.email && !this.common.validateEmail(this.state.email)) {
	// 		messages.push('Invalid Email');
	// 	}
	// 	if(this.state.assistantEmail && !this.common.validateEmail(this.state.assistantEmail)) {
	// 		messages.push('Invalid Assistant Email');
	// 	}
	// 	var errorShow = [];

	// 	messages = messages.filter( (msg) => {
	// 		if(msg) {
	// 			return msg;
	// 		}
	// 	})
	// 	for(var i=0; i<messages.length; i++) {
	// 		var required = messages[i].indexOf('required');
	// 		if(required > 0) {

	// 		}
	// 		else {
	// 			errorShow.push(messages[i]);
	// 		}
	// 	}

	// 	this.setState({ errors: errorShow});

	// 	if(messages.length > 0) {
	// 		return false;
	// 	}
	// 	else {
	// 		return true;
	// 	}
	// }

	async success(profile) {
		console.log("profile: ", profile);
		await AsyncStorage.setItem("roleid", profile.RoleId);
		await AsyncStorage.setItem("userid", profile.userid);
		await AsyncStorage.setItem("authToken", profile.AuthToken);
		await AsyncStorage.setItem("profile", JSON.stringify(profile));
		this.props.navigation.navigate('RealEstateHome')
		this.setState({ loading: false });
	}

	onRegister = async () => {
		if (!this.state.avatarSource) {
			this.common.showToast('Please Select your Profile Picture');

		}
		else if (!this.state.fname) {
			this.common.showToast('Please enter your First Name');
			this.fname.focus()
		}
		else if (!this.state.lname) {
			this.common.showToast('Please enter your Last Name');
			this.lname.focus()
		}
		else if (!this.state.title) {
			this.common.showToast('Please enter your Title');
			this.title.focus()
		}
		else if (!this.state.email) {
			this.common.showToast('Please enter your Email ID');
			this.email.focus()
		}
		else if (this.state.email && !this.common.validateEmail(this.state.email)) {
			this.common.showToast('Please enter valid Email ID');
			this.email.focus()
		}
		else if (!this.state.phone) {
			this.common.showToast('Please enter your Phone Number');
			this.phone.focus()
		}
		else if (this.state.phone && !this.common.validatePhone(this.state.phone)) {
			this.common.showToast('Please enter valid Phone Number');
			this.phone.focus()
		}
		else if (!this.state.agencyName) {
			this.common.showToast('Please enter your Agency Name');
			this.agencyName.focus()
		}
		else if (this.state.assistantEmail && !this.common.validateEmail(this.state.assistantEmail)) {
			this.common.showToast('Please enter valid assistant Email ID');
			this.assistantEmail.focus()
		}
		else if (!this.state.address) {
			this.common.showToast('Please enter your Address');
			this.address.focus()
		}
		else if (!this.state.password) {
			this.common.showToast('Please enter your Password');
			this.password.focus()
		}
		else if (!this.state.confirmPassword) {
			this.common.showToast('Please enter your Confirm Password');
			this.confirmPassword.focus()
		}
		else {
			this.setState({ loading: true });
			await this.getRequestData().then(data => {
				console.log("request : ", data);
				var response = new API('RegisterEstateAgent', data).getResponse();
				response.then(result => {

					if (result.statuscode == 200 && result.result.userid) {
						this.success(result.result);
					}
					else {
						this.common.showToast(result.message)
						// var errors = [];
						// errors.push(result.message);
						// this.setState({ errors: errors })
						this.setState({ loading: false });
					}
				})
			});
		}
		return false;
	}

	async getRequestData() {
		const deviceId = await AsyncStorage.getItem("deviceId");
		const fcmToken = await AsyncStorage.getItem("fcmToken");

		return {
			"roleid": this.state.role,
			"fname": this.state.fname,
			"lname": this.state.lname,
			"emailid": this.state.email,
			"mobileno": this.state.phone,
			"password": this.state.password,
			"profilepic": this.state.profilePic,
			"loginprovider": "",
			"providerkey": "",
			"address": this.state.address,
			"country": "USA",
			"state": this.state.state,
			"city": this.state.city,
			"zipcode": this.state.zipcode,
			"deviceid": deviceId,
			"fcmregid": fcmToken,
			"title": this.state.title,
			"agencyname": this.state.agencyName,
			"assistancename": this.state.assistantName,
			"assistanceemail": this.state.assistantEmail,
		}
	}

	UploadPicture() {
		ImagePicker.showImagePicker(options, (response) => {
			console.log('Response = ', response);

			if (response.didCancel) {
				console.log('User cancelled image picker');
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			} else {
				this.uploadPicApi(response);
			}
		});
	}

	async uploadPicApi(response) {
		this.setState({ loading: true });
		var body = new FormData();
		var pic = response;
		body.append('file', { uri: response.uri, name: response.fileName, filename: response.fileName, type: response.type });
		var response = await new API('UploadPic', body).getResponse();
		console.log("file response: ", response);
		this.setState({ loading: false });
		try {
			if (response.statuscode == 200 && response.result) {
				this.setState({
					profilePic: response.result[0].mediaName
				});
				const source = { uri: pic.uri };
				this.setState({
					avatarSource: source,
				});
			}
			else {
				throw 'API Error in Upload Photo API';
			}
		} catch (error) {
			this.setState({ loading: false });
			console.log('error: ', error);
		}
	}

	mapAddress = (data, details) => {
		this.setState({ address: data.description })
	}


	render() {
		if (this.state.loading) {
			return <Loader />
		}

		var fname = !this.state.fname && this.state.submit ? true : false;
		var lname = !this.state.lname && this.state.submit ? true : false;
		var title = !this.state.title && this.state.submit ? true : false;
		var email = !this.state.email && this.state.submit ? true : false;
		var phone = !this.state.phone && this.state.submit ? true : false;
		var agencyName = !this.state.agencyName && this.state.submit ? true : false;
		var assistantName = !this.state.assistantName && this.state.submit ? true : false;
		var assistantEmail = !this.state.assistantEmail && this.state.submit ? true : false;
		var address = !this.state.address && this.state.submit ? true : false;
		var password = !this.state.password && this.state.submit ? true : false;
		var confirmPassword = !this.state.confirmPassword && this.state.submit ? true : false;


		return (
			<ImageBackground style={styles.containersss} source={require("../../assets/images/background.png")}>
				
				<ScrollView
					ref='_scrollView'
				>
						<View style={styles.registerImageContainer}>
							<Avatar
								size={120}
								//onPress={() => this.UploadPicture()}
								overlayContainerStyle={{ backgroundColor: '#FFF' }}
								rounded icon={{ name: 'person', color: '#C39666', size: 72 }}
								containerStyle={{ borderColor: '#C39666', borderWidth: 2 }}
								source={this.state.avatarSource}
								imageProps={{ resizeMode: 'cover' }}
							/>
							<Text style={{fontSize:16, fontWeight:'bold', color:'#05544e'}}>SIGN UP</Text>
						</View>
						<View style={{padding:20}}>
							<Form>
								<Input containerStyle={{height:50}} value={this.state.fname} onChangeText={(text) => this.setState({ 'fname': text })} placeholder="BUSINESS NAME" inputStyle={[styles.font15]} />

								<Input containerStyle={{height:50}} value={this.state.fname} onChangeText={(text) => this.setState({ 'fname': text })} placeholder="OWNER NAME" inputStyle={[styles.font15]} />

								<Input containerStyle={{height:50}} keyboardType="email-address" value={this.state.email} onChangeText={(text) => this.setState({ 'email': text })} placeholder="EMAIL" inputStyle={[styles.font15]} />

								<Input containerStyle={{height:50}} keyboardType="numeric" value={this.state.phone} onChangeText={(text) => this.setState({ 'phone': text })} placeholder="PHONE NO" inputStyle={[styles.font15]} />
								
								<Input containerStyle={{height:50}} value={this.state.address} onChangeText={(text) => this.setState({'address': text})}  placeholder="ADDRESS" inputStyle={[styles.font15]}  />

								<Input containerStyle={{height:50}} value={this.state.address} onChangeText={(text) => this.setState({'address': text})}  placeholder="LICENSE NUMBER" inputStyle={[styles.font15]}  />

								<Input containerStyle={{height:50}} secureTextEntry={true} value={this.state.password} onChangeText={(text) => this.setState({ 'password': text })} placeholder="PASSWORD" inputStyle={[styles.font15]} />

								<Input containerStyle={{height:50}} secureTextEntry={true} value={this.state.confirmPassword} onChangeText={(text) => this.setState({ 'confirmPassword': text })} placeholder="CONFIRM PASSWORD" inputStyle={[styles.font15]} />

								<TouchableOpacity>
								<LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#05544e', '#0c8e86', '#0c8e86']} style={[styles.buttonContainerss]}>
								<Text style={{color:'#fff'}}>SIGN UP</Text>
								</LinearGradient>
								</TouchableOpacity>
							</Form>
						</View>
				</ScrollView>
			</ImageBackground>
		);
	}
}