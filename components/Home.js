import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';

class Home extends Component {
    render(){
    return(
        <View style={styles.home}>
            <Text style={styles.title}> Hit!!! </Text>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('OtherScreen')}>
                <Text style={styles.title}>Other Screen</Text>
            </TouchableOpacity>
        </View>
    );
    }
};

const styles = StyleSheet.create({
    home:{
        width:'100%',
        height: 90,
        paddingTop: 50,
        backgroundColor: '#f7287b',
        alignItems: 'center', 
        justifyContent: 'center'
    },
    title:{
        color:'black',
        fontSize: 18,
        fontWeight: '900',
        marginBottom: '10%'
    }
});

export default Home;