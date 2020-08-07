import React, { Component } from 'react';
import { View, Text,StyleSheet, TextInput, TouchableOpacity, Picker } from 'react-native';
import ultrasonic from 'react-native-ultrasonic';

const styles = StyleSheet.create({
    backgroundImage:{
        width: '100%',
        height: '100%',
    },
    btn:{
        backgroundColor: '#BF2C27',
        padding: 10,
        marginTop: 15,
        width: '90%',
        height:60,
        borderRadius:30,
            // shadowColor: "#000000",
            // shadowOffset: {
            // width: 15,
            // height: 15,
            // },
            // shadowOpacity: 1.0,
            // shadowRadius: 0,
            // elevation: 15,
    },
    text:{
        fontSize:25,
        fontWeight:"bold",
        textAlign: 'center',
        color: '#fff'
    },
    in:{
        padding: 10,
        borderWidth: 1, 
        borderColor: '#878787', 
        width: '90%',
        borderRadius:30,
    }
});

class Sender extends Component {
    static navigationOptions = {
        title: 'Send Data',
    }
    state = {
        value : '2'
    }

 componentDidMount() {
    ultrasonic.initialize({sound: ultrasonic.sounds.ultrasonic}).then(() => {
        // initialized
     }).catch(error => {
         alert(error.error);
     })
 }
 
  onChange = (itemValue) => {
    this.setState({value: itemValue});

    /*ultrasonic.initialize({sound: ultrasonic.sounds.ultrasonic}).then(() => {
        // initialized
     }).catch(error => {
         alert(error.error);
     })*/

     ultrasonic.initialize({sound: parseInt(itemValue)}).then(() => {
        // initialized
     }).catch(error => {
         alert(error.error);
     })
  }
  onSend = () => {
    const { payload } = this.state;
    ultrasonic.send({payload}).then(() => {
        // message has been sent
    }).catch(error => {
        alert(error);
    })
  }

  render() {
    return (
        <View style = {{flex: 1, flexDirection: 'column'}}>
            <View style = {{flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center'}}>
                <TextInput placeholder = 'message' onChangeText = {(payload) => this.setState({payload})} style = {styles.in}  />
            </View>
            <View style = {{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
                <TouchableOpacity style = {styles.btn} onPress = {this.onSend}>
                    <Text style = {styles.text}>Send</Text>
                </TouchableOpacity>
            </View>
      </View>
    );
  }
}
export default Sender;