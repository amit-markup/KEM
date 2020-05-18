import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button
} from 'react-native';
import { Header } from 'react-native-elements';
import Drawer from 'react-native-drawer';
import SideMenu from './Sidemenu'

export default class Album extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Lorem ipsum is simply",  count:"$500.00", image:"https://lorempixel.com/400/200/nature/6/"},
        {id:2, title: "Lorem ipsum is simply",  count:"$500.00", image:"https://lorempixel.com/400/200/nature/5/"} ,
        {id:3, title: "Lorem ipsum is simply",  count:"$500.00", image:"https://lorempixel.com/400/200/nature/4/"}, 
        {id:4, title: "Lorem ipsum is simply",  count:"$500.00", image:"https://lorempixel.com/400/200/nature/6/"}, 
        {id:5, title: "Lorem ipsum is simply",  count:"$500.00", image:"https://lorempixel.com/400/200/sports/1/"}, 
        {id:6, title: "Lorem ipsum is simply",  count:"$500.00", image:"https://lorempixel.com/400/200/nature/8/"}, 
      ],
      drawerOpen: false,
      uniqueValue: 1
    };
  }


  forceRemount = () => {
    this.setState(({ uniqueValue }) => ({
      uniqueValue: uniqueValue + 1
    })
    );
  }

  addProductToCart = () => {
    Alert.alert('Success', 'The product has been added to your cart')
  }

  goBack() {
    this.props.navigation.goBack();
  }


  closeControlPanel = () => {
    //showBackButton = true
    this.setState({ drawerOpen: false })
  }

  openControlPanel = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen })
  }

  render() {
    return (
      <View style={styles.container}>

{!this.state.drawerOpen ?
          <Header
          // leftComponent={<Button transparent onPress={this.goBack.bind(this)}><Image source={require('../../assets/images/back-arrow.png')} style={{ width: 18, height: 21, marginBottom: 25, transform: [{ rotate: '185deg' }] }} /></Button>}
          centerComponent={{ text: 'Home', style: { color: '#fff', marginBottom: 25, fontSize: 16 } }}
          rightComponent={
            <View style={{ flexDirection: 'row', }}>
              <TouchableOpacity style={{ marginBottom: 20, paddingRight:5 }}>
                <Image source={require('../../assets/images/search.png')} style={{ width: 18, height: 18, marginBottom: 1 }} />
              </TouchableOpacity>
              <TouchableOpacity style={{ paddingRight:5}}>
                <Image source={require('../../assets/images/cart.png')} style={{ width: 18, height: 18, marginBottom: 2 }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.openControlPanel()}>
                <Image source={require('../../assets/images/menu.png')} style={{ width: 18, height: 18, marginBottom: 2 }} />
              </TouchableOpacity>
            </View>
          }
          containerStyle={{
            backgroundColor: '#1D4F36',
            justifyContent: 'space-around',
            height: 45,
          }}
        />
          :
          <Header
          leftComponent={<View style={{ flexDirection: 'row', }}>
          <TouchableOpacity onPress={()=> this.closeControlPanel()}>
            <Image source={require('../../assets/images/back-arrow.png')} style={{ width: 18, height: 18, marginBottom: 20 }} />
          </TouchableOpacity>
        </View>}
          centerComponent={{ text: 'Menu Options', style: { color: '#fff', marginBottom: 25, fontSize: 16 } }}
          rightComponent={
            <View style={{ flexDirection: 'row', }}>
              <TouchableOpacity onPress={()=> this.closeControlPanel()}>
                <Image source={require('../../assets/images/menu.png')} style={{ width: 18, height: 18, marginBottom: 20 }} />
              </TouchableOpacity>
            </View>
          }
          containerStyle={{
            backgroundColor: '#1D4F36',
            justifyContent: 'space-around',
            height: 45,
          }}
        />}

        {/* <Header
          // leftComponent={<Button transparent onPress={this.goBack.bind(this)}><Image source={require('../../assets/images/back-arrow.png')} style={{ width: 18, height: 21, marginBottom: 25, transform: [{ rotate: '185deg' }] }} /></Button>}
          centerComponent={{ text: 'Home', style: { color: '#fff', marginBottom: 25, fontSize: 16 } }}
          rightComponent={
            <View style={{ flexDirection: 'row', }}>
              <TouchableOpacity style={{ marginBottom: 20, paddingRight:5 }}>
                <Image source={require('../../assets/images/search.png')} style={{ width: 18, height: 18, marginBottom: 1 }} />
              </TouchableOpacity>
              <TouchableOpacity style={{ paddingRight:5}}>
                <Image source={require('../../assets/images/cart.png')} style={{ width: 18, height: 18, marginBottom: 2 }} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../../assets/images/menu.png')} style={{ width: 18, height: 18, marginBottom: 2 }} />
              </TouchableOpacity>
            </View>
          }
          containerStyle={{
            backgroundColor: '#1D4F36',
            justifyContent: 'space-around',
            height: 45,
          }}
        /> */}
        <Drawer
          open={this.state.drawerOpen}
          type="overlay"
          tapToClose={true}
          ref={(ref) => { this.drawer = ref }}
          content={<SideMenu {...this.props} forceRemount={() => { this.forceRemount() }} onDrawerItemClick={(val) => this.setState({ drawerOpen: val })} />}
          onClose={() => this.closeControlPanel()} >
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <TouchableOpacity style={styles.card}>
                <View style={styles.imageContainer}>
                  <Image style={styles.cardImage} source={{uri:item.image}}/>
                </View>
                <View style={[styles.cardContent,{ padding:8}]}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.count}>({item.count})</Text>
                  <Text style={styles.description}>Lorem ipsum is simple a dummy content</Text>
                  <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:8}}>
                  <TouchableOpacity style={{backgroundColor:'#1D4F36', padding:7, borderRadius:8, width:70}}>
                    <Text style={{fontSize:9, alignSelf:'center', color:'#fff'}}>ADD TO CART</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{backgroundColor:'#cc9330', padding:8, borderRadius:8, width:70}}>
                    <Text style={{fontSize:9, alignSelf:'center', color:'#fff'}}>BUY NOW</Text>
                  </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>
          </Drawer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  list: {
    paddingHorizontal: 10,
  },
  listContainer:{
    alignItems:'center'
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    marginVertical: 8,
    backgroundColor:"white",
    flexBasis: '45%',
    marginHorizontal: 10,
  },
  cardContent: {
    paddingVertical: 17,
    justifyContent: 'space-between',
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  imageContainer:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  /******** card components **************/
  title:{
    fontSize:12,
    flex:1,
    fontWeight:'bold',
    color:"#333"
  },
  count:{
    fontSize:12,
    flex:1,
    color:"#1D4F36"
    , marginTop:3
  },
  description:{
    fontSize:12,
    flex:1,
    color:"#333"
    , marginTop:4
  }
});