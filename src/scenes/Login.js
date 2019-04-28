import React, { Component } from 'react';
import { TouchableOpacity, Text, View, TextInput, Image, AsyncStorage } from 'react-native';
import Values from '../Values.json';
import { Actions } from 'react-native-router-flux';
import { Spinner } from '../components/common';


class Login extends Component {

    state = { username: '', password: '', error: '', loading: false };

    componentDidMount = () => {
        AsyncStorage.getItem('username').then((value) => {
            this.setState({ 'username': value });
            console.log('username ', this.state.username);
            if(this.state.username) {
                Actions.ticket();
            }
        });
    };

    goToTicket = () => {

        if(this.state.username != null) {
            switch (this.state.username.toLowerCase()) {

                case Values.customer:
                    console.log("Welcome Customer!");
                    AsyncStorage.setItem('username', this.state.username);
                    this.onLoginSuccess();
                    Actions.ticket();
                    break;

                case Values.dev:
                    console.log("Welcome Dev!");
                    AsyncStorage.setItem('username', this.state.username);
                    this.onLoginSuccess();
                    Actions.ticket();
                    break;

                default:
                    this.setState({ error : Values.incorrect_account, loading: false });

            }
        } else {
            this.setState({ error : Values.incorrect_account, loading: false });
        }

    };

    onLoginSuccess = () => {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    };

    setTimeOutForRedirect = () => {
        timeoutCheck = setTimeout(() => {
            this.goToTicket();
        }, 2000);
    };

    renderLoginButton() {
        if(this.state.loading) {
            return <Spinner size="small"/>
        }

        return (
            <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.processLogin()}>
                <Text style={styles.loginText}>{Values.loginButtonText}</Text>
            </TouchableOpacity>
        );
    }

    processLogin = () => {
        this.setState({ error : '', loading: true });
        this.setTimeOutForRedirect();
    };

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../images/logo.png')}/>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={require('../images/user.png')}/>
                    <TextInput style={styles.inputs}
                               placeholder="Username"
                               keyboardType="email-address"
                               underlineColorAndroid='transparent'
                               onChangeText={username => this.setState({ username })}/>
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={require('../images/padlock.png')}/>
                    <TextInput style={styles.inputs}
                               placeholder="Password"
                               secureTextEntry
                               underlineColorAndroid='transparent'
                               onChangeText={(password) => this.setState({password})}/>
                </View>

                <Text style={ styles.errorTextStyle }>
                    {this.state.error}
                </Text>

                {this.renderLoginButton()}

            </View>
        );
    }

}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
    logo:{
        width:90,
        height:120,
        marginBottom: 20,
        justifyContent: 'center'
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
    },
    errorTextStyle: {
        fontSize: 16,
        marginBottom:12,
        alignSelf: 'center',
        color: 'red'
    },
    loginButton: {
        backgroundColor: "#3b3f4f",
    },
    loginText: {
        color: 'white',
    }
};


export default Login;