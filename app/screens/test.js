import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    FlatList,
    Modal,
    TouchableHighlight,
    Button
} from 'react-native';
import NumericInput from 'react-native-numeric-input'

export default class FriendsView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, "title": "Cup Bread", "count": "£2.99", "image": require("../../assets/images/maskCopy.png") },
                { id: 2, "title": "Farmerce Coarce", "count": "£3.99", "image": require("../../assets/images/maskCopy2.png") },
                { id: 3, "title": "Small Round White", "count": "£4.99", "image": require("../../assets/images/maskCopy3.png") },
                { id: 4, "title": "French Baguette", "count": "£5.99", "image": require("../../assets/images/maskCopy4.png") },
                { id: 5, "title": "Cup Bread", "count": "£6.99", "image": require("../../assets/images/maskCopy2.png") },
                { id: 6, "title": "Cup Bread", "count": "£7.99", "image": require("../../assets/images/maskCopy3.png") },
                { id: 7, "title": "Cup Bread", "count": "£8.99", "image": require("../../assets/images/maskCopy4.png") },
                { id: 8, "title": "Cup Bread", "count": "£9.99", "image": require("../../assets/images/maskCopy.png") }
            ],
            value: 0,
            clickDataShow:1,
            isFilter: false,
        };
    }



    changeData(data) {
        if (data === "1") {
          this.setState({ clickDataShow: 1 })
        }
        else if (data === "2") {
          this.setState({ clickDataShow: 2 })
        }
        else if (data === "3") {
          this.setState({ clickDataShow: 3 })
        }
        else if (data === "4") {
          this.setState({ clickDataShow: 4 })
        }
      }

      dataRender() {
        if (this.state.clickDataShow === 1) {
          return (
            this.result()
          );
        }
        else if (this.state.clickDataShow === 2) {
          return (
            this.result()
          );
        }
        else if (this.state.clickDataShow === 3) {
          return (
            this.result()
          );
        }
        else if (this.state.clickDataShow === 4) {
          return (
            this.result()
          );
        }
      }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        {/* <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar1.png'}}/>
                <Text style={styles.name}>John Doe</Text> */}
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'row', width: "85%" }}>
                                <TouchableOpacity>
                                    <Image source={require("../../assets/images/menu.png")} style={{ width: 25, height: 25, left: -13 }} />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 15, paddingLeft: 8, color: 'white' }}>Categories</Text>
                            </View>
                            <View style={{ flexDirection: 'row', width: "15%" }}>
                                <TouchableOpacity>
                                    <Image source={require("../../assets/images/search.png")} style={{ width: 25, height: 25, }} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={require("../../assets/images/cart.png")} style={{ width: 25, height: 25, marginLeft: 10 }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignContent: 'space-between', marginBottom: 30 }}>
                        <TouchableOpacity onPress={() => this.changeData("1")}>
                            <Text style={{ color: this.state.clickDataShow === 1 ? 'white' : '#eda36f', fontSize: 14, borderBottomWidth: this.state.clickDataShow === 1 ? 2 : 0, borderBottomColor:'white' }}>Bread</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.changeData("2")}>
                            <Text style={{ color: this.state.clickDataShow === 2 ? 'white' : '#eda36f', fontSize: 14, borderBottomWidth: this.state.clickDataShow === 2 ? 2 : 0,borderBottomColor:'white' }}>Rolls</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.changeData("3")}>
                            <Text style={{ color: this.state.clickDataShow === 3 ? 'white' : '#eda36f', fontSize: 14, borderBottomWidth: this.state.clickDataShow === 3 ? 2 : 0,borderBottomColor:'white' }}>Small Pastry</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.changeData("4")}>
                            <Text style={{ color: this.state.clickDataShow === 4 ? 'white' : '#eda36f', fontSize: 14, borderBottomWidth: this.state.clickDataShow === 4 ? 2 : 0,borderBottomColor:'white' }}>Coffe Cookies</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginBottom: 420 }}>
                    <FlatList style={styles.list}
                        contentContainerStyle={styles.listContainer}
                        data={this.state.data}
                        horizontal={false}
                        numColumns={2}
                        keyExtractor={(item) => {
                            return item.id;
                        }}
                        ItemSeparatorComponent={() => {
                            return (
                                <View style={styles.separator} />
                            )
                        }}
                        renderItem={(post) => {
                            const item = post.item;
                            return (
                                <TouchableOpacity style={styles.card} onPress={() => this.setState({ isFilter: true })}>
                                    <View style={styles.imageContainer}>
                                        <Image style={styles.cardImage} source={item.image} />
                                    </View>
                                    <TouchableOpacity style={[styles.imageContainer, { position: 'absolute', alignSelf: 'flex-end', backgroundColor: 'white', padding: 2, borderRadius: 5, marginTop: 8, right: 8 }]}>
                                        <Image style={{ width: 25, height: 25 }} source={require("../../assets/images/icons8Like.png")} />
                                    </TouchableOpacity>
                                    <View style={styles.cardContent}>
                                        <Text style={styles.title}>{item.title}</Text>
                                        <View style={{ flexDirection: 'row', width: '100%', marginTop: 10 }}>
                                            <View style={{ width: '40%' }}>
                                                <Text style={[styles.count, { color: '#778899' }]}>{item.count}</Text>
                                            </View>
                                            <View style={{ alignSelf: 'flex-end', width: '60%' }}>
                                                <NumericInput
                                                    value={this.state.value}
                                                    totalWidth={100}
                                                    iconStyle={{ color: '#ef7922', }}
                                                    inputStyle={{ backgroundColor: '#fce4d3' }}
                                                    containerStyle={{ borderRadius: 3 }}
                                                    totalHeight={30}
                                                    iconSize={25}
                                                    step={1.5} onChange={value => this.setState({ value })} />
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }} />
                    <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}>
                        <View style={{ alignSelf: 'center', width: "85%" }}>
                            <Text style={{ color: 'white', marginLeft: 10, fontSize: 16 }}>{this.state.value} ITEM</Text>
                            <Text style={{ color: 'white', marginLeft: 10, fontSize: 16 }}>£2.99</Text>
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 16 }}>Cart ></Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <Modal
                transparent={true}
                visible={this.state.isFilter}
                animationType='slide'
                onRequestClose={this.closeModal}>
                <View style={{
                    position: 'relative',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    flex: 1,
                    justifyContent: 'space-between',

                    backgroundColor: 'white'
                }}>
                    <TouchableHighlight onPress={() => this.setState({ isFilter: false })} style={{ alignItems: 'flex-end' }}>

                    </TouchableHighlight>
                    <View style={{
                    flex: 1
                    }}>
                   <Button block style={{ marginHorizontal: 20, marginTop: 100, backgroundColor: '#e26d0e', }} >
                        <Text>Apply</Text>
                    </Button>
                    <Text>
                    </Text>
                    </View>
                </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#ef7922",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    buttonContainer: {
        height: 55,
        flexDirection: 'row',
        //justifyContent: 'center',
        //alignItems: 'center',
        marginBottom: 20,
        width: "90%",
        borderRadius: 6,
        alignSelf: 'center',
        top: 8
    },
    loginButton: {
        backgroundColor: '#ef7922',
    },
    containers: {
        // flex:1,
        // marginTop:20,
    },
    headerContent: {
        padding: 30,
        alignItems: 'center',
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "#FFFFFF",
        marginBottom: 10,
    },
    image: {
        width: 60,
        height: 60,
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        padding: 30,
        backgroundColor: "#E6E6FA",
    },
    box: {
        padding: 5,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: {
            height: 1,
            width: -2
        },
        elevation: 2
    },
    username: {
        color: "#20B2AA",
        fontSize: 22,
        alignSelf: 'center',
        marginLeft: 10
    },


    list: {
        paddingHorizontal: 10,
    },
    listContainer: {
        alignItems: 'center'
    },
    separator: {
        marginTop: 10,
    },
    /******** card **************/
    card: {
        marginVertical: 8,
        flexBasis: '45%',
        marginHorizontal: 10,
    },
    cardContent: {
        paddingVertical: 17,
        justifyContent: 'space-between',
    },
    cardImage: {
        flex: 1,
        height: 150,
        width: null,
        borderRadius: 20
    },
    imageContainer: {
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
    title: {
        fontSize: 18,
        flex: 1,
        //color:"#778899"
        color: "black"
    },
    count: {
        fontSize: 18,
        flex: 1,
        color: "#B0C4DE"
    },
});