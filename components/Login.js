import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from "react-native";

const Login = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.title}>LOGIN</Text>
            <View style={{padding: 10, backgroundColor: 'transparent', minWidth: 200, borderWidth: 1, borderColor: '#fff'}}>
                <TextInput
                    style={{height: 20, color: '#fff'}}
                    placeholderTextColor="#fff"
                    placeholder="E-mail"
                    onChangeText={email => setEmail(email)}
                    defaultValue={email}
                />
            </View>
            <View style={{padding: 10, backgroundColor: 'transparent', minWidth: 200, borderWidth: 1, borderColor: '#fff', marginTop: 10}}>
                <TextInput
                    style={{height: 20, color: '#fff'}}
                    secureTextEntry={true}
                    placeholder="Password"
                    placeholderTextColor="#fff"
                    onChangeText={password => setPassword(password)}
                    defaultValue={password}
                />
            </View>
            <Text style={styles.welcomeTextSmall}>Don't have an account? Register</Text>
            <View style={styles.buttons}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Welcome')}
                >
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'normal',
        padding: 10,
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
        minWidth: 90,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        justifyContent: 'center'
    },
    welcomeTextSmall: {
        color: 'gray',
        maxWidth: 245,
        textAlign: 'center',
        fontSize: 12,
        padding: 5,
    }
});

export default Login;
