import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import Loader from './src/components/Loader'
import Login from './src/components/Login'
import Discover from './src/components/Discover'


export default class App extends Component {
  state = { loggedIn: null};

    componentWillMount() {
        firebase.initializeApp({
          
        });

        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            this.setState({ loggedIn: true });
          } else {
            this.setState({ loggedIn: false});
          }
        });
    }

    renderInitialView() {
      switch (this.state.loggedIn) {
        case true:
          return <Discover />
        case false:
          return <Login />;
        default:
          return <Loader size="large" />;
      }
    }
  render() {
    return (
          <View style={styles.container}>
            {this.renderInitialView()}
          </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
