import React from 'react';
import {bindActionCreators} from 'redux';
import * as counterActions from '../actions';
import {connect} from 'react-redux';

import {TouchableHighlight, View, Text, Navigator, TouchableOpacity, Alert} from 'react-native';
import styles from '../styles/styles.ios';

import ContactsScene from '../components/contactsScene';
import MainMenuScene from '../containers/mainMenuScene';
import AnimalListScene from '../components/animalListScene';
import EventScene from '../components/eventScene';
import AnimalNeighbourScene from '../components/animalNeighbourScene';
import AnimalScene from '../containers/animalScene';
import QrScene from '../components/qrScene';

import * as scenes from '../scenes';

var bgMainMenu;

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if (route.id === scenes.MAIN_MENU) {
      return null;
    } else {
      return (
        <TouchableHighlight onPress={() => {
          bgMainMenu();
          navigator.replace({
            id: scenes.MAIN_MENU,
            title: 'ZOO Brno',
          })
        }}>
        <Text>Menu</Text>
        </TouchableHighlight>
      );
    }
  },

  RightButton: function(route, navigator, index, navState) {
    return null;
  },

  Title: function(route, navigator, index, navState) {
    return (<Text>{route.title}</Text>);
  },
};

class ZooApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: scenes.sceneTitles[scenes.MAIN_MENU].bgColor,
    }

    bgMainMenu = () => {this.changeColor(scenes.sceneTitles[scenes.MAIN_MENU].bgColor)};
  }

  renderScene(route, navigator) {
    const bgColor = scenes.sceneTitles[route.id].bgColor;

    switch (route.id) {
      case scenes.MAIN_MENU:
        return (<MainMenuScene navigator={navigator} bg={bgColor}/>);
      case scenes.ANIMAL_DETAIL:
        return (<AnimalScene animal={route.animal} navigator={navigator} bg={() => {this.changeColor(bgColor)}}/>);
      case scenes.CONTACTS:
        return (<ContactsScene navigator={navigator} bg={() => {this.changeColor(bgColor)}}/>);
      case scenes.ANIMAL_LIST:
        return (<AnimalListScene navigator={navigator} bg={() => {this.changeColor(bgColor)}}/>);
      case scenes.EVENTS:
        return (<EventScene bg={() => {this.changeColor(bgColor)}}/>);
      case scenes.ANIMAL_NEIGHBOURS:
        return (<AnimalNeighbourScene animal='medvedKamcatsky' navigator={navigator} bg={() => {this.changeColor(bgColor)}}/>);
      case scenes.QR_READER:
        return (<QrScene cancelButtonVisible={true} navigator={navigator} bg={() => {this.changeColor(bgColor)}}/>);
    }
  }

  changeColor(color) {
    this.setState({backgroundColor: color});
  }

  render() {
    return (
      <Navigator
        initialRoute={{ title: 'ZOO Brno', id: scenes.MAIN_MENU }}
        renderScene={(route, navigator) => {
          return this.renderScene(route, navigator);
        }}
        navigationBar={
           <Navigator.NavigationBar
             routeMapper={NavigationBarRouteMapper}
             style={[styles.navigationBar, this.state]}
           />
        }
        style={styles.navigator}
      />
    );
  }
}

export default connect(
  state => ({
    state: state.configuration
  }),
  dispatch => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(ZooApp);
