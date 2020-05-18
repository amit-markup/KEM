import {  StyleSheet } from 'react-native';

export default StyleSheet.create({
    splash: {
        width: '100%',
        height: '100%',
      },
      red: {
        color:'red'
      },  
      imageThumbnail:{
        borderWidth:1,
        width:'100%',
        flex:1,
      },
      forgotPasswordContainer: {
        padding:10,
        flex:1,
      },
      otpModel: {
        justifyContent:'center',
        width:320,
        height:350
    
      },
      otpmsg: {
        fontSize: 16,
        textAlign:'center',
        marginBottom:50,
      },
      border:{
        borderBottomColor:'#ccc',borderBottomWidth:1,
        marginHorizontal:10,
      },
      border2:{
        borderBottomColor:'#ccc',borderBottomWidth:1,
        marginVertical:10,
      },
      orWrapper: {
        marginVertical:20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
      },
      modelButton: {
        backgroundColor: "#333",
        marginHorizontal:10,
        marginVertical: 20,
        width:120,
        borderRadius:6,
        justifyContent:'center',
      },
      modelButton2: {
        marginHorizontal:10,
        marginVertical: 20,
        width:120,
        borderRadius:6,
        justifyContent:'center',
      },
      btnSubmit: {
        backgroundColor: "#333",
        marginHorizontal:10,
        marginVertical: 20,
        minWidth:200,
        justifyContent:'center',
        
      },
      loginButton: {
        backgroundColor: "#333",
        borderRadius:10,
        paddingHorizontal:30,
        marginVertical: 20,
        height:35,
      },
      loginButtons: {
        backgroundColor: "#333",
        borderRadius:5,
        paddingHorizontal:40,
        marginVertical: 30,
        height:45,
      },
      formItem: {
        borderColor: '#FFF',
        borderWidth:0,
        width:"95%",
        alignSelf:'center'
      },
      font15: {
        fontSize:14,
        paddingLeft:0,
      },
      textCenter: {
        textAlign:'center',
        
      },

      containersss: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#B0E0E6',
      },
      center:{
        alignItems:'center',
      },
      buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        marginBottom:20,
        width:"90%",
        borderRadius:6,
        top:50,
      },

      buttonContainerss: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        marginBottom:20,
        width:"90%",
        borderRadius:6,
        top:20,
      },

      loginButton: {
        backgroundColor: '#3498db',
      },


      /*** Sign Up ***/

      container: {
        marginHorizontal:15,
        // borderWidth:1,
        // borderColor:'red',
      },
      //Register page style
  registerFormContainer: {
    paddingLeft:10,
    paddingBottom:20,
    paddingRight:30,
    overflow:'hidden',
  },
  registerImageContainer: {
    alignItems:'center',
    marginVertical:60 ,
  },
  twoRow: {
    flexDirection: 'row',
    flex:1,
    justifyContent:'space-between'
  },
  sectionRow:{
    flexDirection:'row',
  },
  threeRow: {
    flex:1,
  },  
  sectionColumn: {
    flex:1,
    marginHorizontal:10,
    borderBottomWidth:1,
    borderBottomColor:'#ccc',
    
  },
  sectionBorder: {
    margin:10,
    borderBottomWidth:1,
    borderBottomColor:'#ccc',
    paddingBottom:10,
  },  
  borderNone: {
    borderWidth:0,
    borderColor:'#FFF'
  },
  thriceRow: {
    width:'29%'
  },
  halfRow: {
    width:"46%",
  },
  registerOtherComponents:{
    paddingLeft:10,
    paddingTop:15,
  },
  registerOtherComponentsText:{
    color: "gray",
    fontWeight:"500",
    fontSize:14,
  },
  errorContainer: {
    // backgroundColor:'#F74646',
    margin:10,
    borderRadius:2,
  },
  error:{
    color: 'red',
    paddingHorizontal:10,
    paddingVertical:3,
  },
});