import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from "react-native";

const Welcome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>MARKETPLACE</Text>
            <Text style={styles.welcomeText}>
                Welcome to our marketplace, here you can buy or sell your used items!
            </Text>
            <Text style={styles.welcomeTextSmall}>Designed and developed by Artem Sitnov</Text>
            <View style={styles.buttons}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        color: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'normal',
    },
    buttons: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: "transparent",
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 0,
        minWidth: 80,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        justifyContent: 'center'
    },
    welcomeText: {
        color: '#fff',
        maxWidth: 300,
        textAlign: 'center',
        margin: 'auto',
        padding: 10,
        paddingBottom: 0
    },
    welcomeTextSmall: {
        color: 'gray',
        maxWidth: 300,
        textAlign: 'center',
        fontSize: 12,
        padding: 10,
        paddingTop: 5
    }
});

export default Welcome;
