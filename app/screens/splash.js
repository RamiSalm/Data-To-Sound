import React, { Component } from 'react';
import { 
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground  } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex:2,
    justifyContent: 'center',
    alignItems: 'center',
  },
    backgroundImage:{
    // remove width and height to override fixed static size
    width: '100%',
    height: '100%',
  },
  ttt:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:-50,
    width:'100%'
  },
  img:{
    width: '70%',
    height: 200,
  },
  text:{
    fontSize:25,
    fontWeight:"bold"
  }
});

class splash extends Component {
  async componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('app')
      }, 2000);
  }
  render() {
    return (
        <ImageBackground source={require('C:/Users/RS_jaf/Desktop/please/app/img/11.png')} style={styles.backgroundImage}>
          <View style={styles.container}>
            <TouchableOpacity style = {styles.ttt} onPress = {() => this.props.navigation.navigate('app')}>
              <Image
                source={require('C:/Users/RS_jaf/Desktop/please/app/img/2.png')}
                style={styles.img}
              />
              <Text style={styles.text}>Data Over Sound</Text>
            </TouchableOpacity>
            
          </View>
        </ImageBackground>
    );
  }
}
export default splash;