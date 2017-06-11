
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import LoginPage from './LoginPage';
import SearchPage from './SearchPage';

export default class App extends React.Component {

  render() {

    return(
      <Router>
        <Scene key="root">
          <Scene key="LoginPage" component={LoginPage} title="YoutubeApp" initial={true} />
          <Scene key="SearchPage" component={SearchPage} title="YoutubeApp" />
        </Scene>
      </Router>
    )

  }

}
