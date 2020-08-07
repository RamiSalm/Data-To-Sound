import React, { Component } from 'react';
import { View,ImageBackground, Text,StyleSheet, TouchableOpacity, PermissionsAndroid } from 'react-native';

const styles = StyleSheet.create({
    backgroundImage:{
      width: '100%',
      height: '100%',
  },
  btn:{
    backgroundColor: '#BF2C27',
    padding: 10,
    margin: 12,
    width: '60%',
    height:60,
    borderRadius:30,
    shadowColor: "#000000",
    shadowOffset: {
      width: 15,
      height: 15,
    },
    shadowOpacity: 1.0,
    shadowRadius: 0,
    elevation: 15,
  },
  text:{
    fontSize:25,
    fontWeight:"bold",
    textAlign: 'center',
    color: '#fff'
  }
});

class Intro extends Component {
  static navigationOptions = {
      title: 'Send data over ultrasonic'
  }
  async componentDidMount() {
    await this.requestCameraPermission();
  }

  async requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'Permission to use your audio and microphone',
          message:
            'We need access to your microphone and audio ' +
            'so you send and receive messages.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  render() {
    return (
      <ImageBackground source={require('C:/Users/RS_jaf/Desktop/please/app/img/3.png')} style={styles.backgroundImage}>
        <View style = {{flex: 1, flexDirection: 'column'}}>
          <View style = {{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center',height:200}}>
            <TouchableOpacity style = {styles.btn} onPress = {() => this.props.navigation.navigate('sender')} >
                <Text style = {styles.text}>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.btn} onPress = {() => this.props.navigation.navigate('receiver')}>
                  <Text style = {styles.text}>Receive</Text>
              </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
export default Intro;