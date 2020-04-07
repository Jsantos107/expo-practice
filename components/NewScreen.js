import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';

class NewScreen extends Component {
    render(){
    return(
        <View style={styles.new}>
            <Text style={styles.title}> New Screen </Text>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Home')}>
                <Text style={styles.title}>Home</Text>
            </TouchableOpacity>
        </View>
    );
    }
};

const styles = StyleSheet.create({
    new:{
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

export default NewScreen;