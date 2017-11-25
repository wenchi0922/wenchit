import React, { Component } from 'react';
import { StyleSheet, Text, View,  Image } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import Loader from './Loader';
import firebase from 'firebase';
import Discover from './Discover'

const styles = StyleSheet.create({

    loginButtonArea: {
        paddingTop: 250
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    errorMessage: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    },
    text: {
        fontSize: 20,
        backgroundColor: '#F5FCFF'
    }
});

export default class Login extends Component {
  state = {
      email: '',
      password: '',
      error: '',
      loading: false,
  };

  onButtonPress() {
      const { email, password } = this.state;
      this.setState({error: '', loading: true});

      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onAuthSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.onAuthSuccess.bind(this))
                .catch(this.onAuthFailed.bind(this));
        });
  }

  onAuthSuccess() {
      this.setState({
        email: '',
        password: '',
        error: '',
        loading: false,
      });
  }

onAuthFailed() {
    this.setState({
        error: 'Authentication Failed',
        loading: false,
    });
}

  renderLoader() {
    if (this.state.loading) {
        return <Loader size="large"/>;
    }
  }

  render() {
    const { fieldStyles, loginButtonArea, errorMessage, container } = styles;
    return (
      <View >
      <Image source={require('../images/background.png')} style={styles.container} blurRadius={ 2 }>

        <FormLabel>Enter Email</FormLabel>
        <FormInput
          text={this.state.email}
          onChangeText={email => this.setState({ email })}
          InputStyle={fieldStyles}
          />
        <FormLabel>Enter Passoword</FormLabel>
        <FormInput
            text={this.state.password}
            onChangeText={password => this.setState({ password })}
            InputStyle={fieldStyles}
            password={true}
          />

        <Text style={errorMessage}>{this.state.error}</Text>
        <View style={loginButtonArea}>
          <Button
            raised
            backgroundColor='#5fa8d3'
            fontSize={18}
            borderRadius={50}
            title='Login or Sign Up'
            underlayColor='transparent'
            onPress={this.onButtonPress.bind(this)}
          />
        </View>
        </Image>
      </View>
    );
  }
}
