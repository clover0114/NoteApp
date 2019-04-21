import React from 'react'
import { StyleSheet, View, TextInput, TouchableHighlight, Text } from 'react-native'


class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    ログインする
                </Text>
                <TextInput style={styles.input} value="Email Address" />
                <TextInput style={styles.input} value="PassWord" />
                <TouchableHighlight style={styles.button} onPress={() => { }} >
                    <Text style={styles.buttonTitle}>送信</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 24,
    },
    input: {
        backgroundColor: '#fff',
        height: 48,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 8,
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        alignSelf: 'center',
        marginBottom: 24,
    },
    button: {
        backgroundColor: '#DE2F75',
        height: 48,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        alignItems: 'center',
        alignSelf: 'center'
    },
    buttonTitle: {
        color: '#fff',
        fontSize: 18,
    }
});

export default LoginScreen