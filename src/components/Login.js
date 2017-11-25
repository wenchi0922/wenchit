import React, { Component } from 'react';
import { StyleSheet, Text, View,  Image } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import Loader from './Loader';
import firebase from 'firebase';
import Discover from './Discover'

const styles = StyleSheet.create({

    labelContainer: {
      backgroundColor: 'transparent'
    },

    loginButtonArea: {
        paddingTop: 100
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorMessage: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    },
    textLabel: {
        fontSize: 15,
        color: "white",
        fontWeight: "bold"
    },
    text: {
      fontSize: 15,
      color: "white",
      marginLeft: 75
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
          <FormLabel containerStyle={styles.labelContainer} labelStyle={styles.textLabel}>
            Enter Email
          </FormLabel>
          <FormInput
            text={this.state.email}
            onChangeText={email => this.setState({ email })}
            inputStyle={styles.text}
            />
          <FormLabel containerStyle={styles.labelContainer} labelStyle={styles.textLabel}>
            Enter Password
          </FormLabel>
          <FormInput
              text={this.state.password}
              onChangeText={password => this.setState({ password })}
              password={true}
              inputStyle={styles.text}
            />
          <Text style={errorMessage}>{this.state.error}</Text>

          <View style={loginButtonArea}>
          <Button
            raised
            backgroundColor='#5fa8d3'
            fontSize={15}
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
