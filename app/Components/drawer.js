import React from 'react';
import { TouchableOpacity, Text,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Common from '../screens/common/index';
 const jobIcon = require('../../assets/images/search.png');
const OngoingjobIcon=require('../../assets/images/search.png');

export default DrawerMenu = (props) =>
  (<TouchableOpacity style={props.menuStyle} onPress={props.onPress}>
    {props.isImage
    ?
    props.iconName==="job"
    ? <Image 
    source={jobIcon} 
    style={{width:24,
      // alignSelf: 'flex-start',
      // justifyContent: 'flex-start'
      marginTop:5
    }
    }
    />:<Image source={OngoingjobIcon} style={{width:24}}/>
    
    :
    <Icon name={props.iconName}
    color='white'
    size={20}
    style={{ alignSelf: 'center' }} />
    }
   
    <Text style={{ fontSize: Common.fontSizeLarge, color: 'white', marginHorizontal: '10%' }}>{props.text}</Text>
  </TouchableOpacity>)