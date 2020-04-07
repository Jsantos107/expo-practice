import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class OtherScreen extends Component {
    render(){
    return(
        <View style={styles.other}>
            <Text style={styles.title}> Other Screen </Text>
            <Button title='New Screen' onPress={() => this.props.navigation.navigate('NewScreen')}/>
        </View>
    );
    }
};

const styles = StyleSheet.create({
    other:{
        width:'100%',
        height: 90,
        paddingTop: 50,
        backgroundColor: '#f7288b',
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

export default OtherScreen;