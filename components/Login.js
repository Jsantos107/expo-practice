import React, { useState, Component } from 'react';
import { View, TextInput, StyleSheet, Button, Modal, AsyncStorage, StatusBar, TouchableOpacity, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';

const test = {username:'test', password:'123'}
const userURL = `http://localhost:3000/users`
const loginURL = `http://localhost:3000/login`
export default class Login extends Component{
    state={
        username:'',
        password:'',
        visible: true
    }
    static navigationOptions = {
        header: null
    }
    
    render(){
        return( 
            <Modal visible={this.state.visible} animationType='slide'>
                <StatusBar backgroundColor='#1e90ff' barStyle='light-content'/>
                <View style={styles.login}>
                    <TextInput style={styles.input} placeholder="Enter Username"
                    autoCapitalize={"none"}
                    value={this.state.username} onChangeText={(username)=> this.setState({username})}/>

                    <TextInput style={styles.input} placeholder="Enter Password" autoCapitalize={"none"} 
                    value={this.state.password} secureTextEntry={true} onChangeText={(password)=> this.setState({password})}/>

                    <View style={styles.button}>
                        {/* <Button title='Cancel' color='red' onPress={this.setState({visible: false})}/> */}
                        <TouchableOpacity
                            onPress={this.signin}>
                            <Text style={{backgroundColor: 'red'}}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    }
    signin = async() => {
        if(test.username === this.state.username && test.password === this.state.password){
            alert('Logged In');
            await AsyncStorage.setItem('Loggedin', '1')
            this.props.navigation.navigate('Home')

        }else{
            alert('Username or password are incorrect!')
        }
    }
};

const styles = StyleSheet.create({
    button:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 4,
        width: '75%',
    },
    input:{
        borderColor:'black', 
        borderWidth: 1, 
        padding:10, 
        width:'80%',
        marginBottom: 10
      },
    login:{
        flex: 1,
        justifyContent:'center', 
        alignItems:'center'
      }
 });