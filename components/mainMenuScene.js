import React from 'react';
import Dimensions from 'Dimensions';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableHighlight, Alert
} from 'react-native';
import { connect } from 'react-redux'

import styles from '../styles/styles.ios';
import * as scenes from '../scenes';

class MainMenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const bgColor = scenes.sceneTitles[this.props.scene].bgColor;
    const barColor = scenes.sceneTitles[this.props.scene].barColor;
    const title = scenes.sceneTitles[this.props.scene].title;
    return (
      <TouchableHighlight
        underlayColor='#aaaaaa'
        onPress={() => scenes.navigatePush(this.props.navigator, this.props.scene, this.props.sceneProps)}
        >
          <View style={[styles.mainMenuItem, {backgroundColor: bgColor}]}>
            <Text style={[styles.mainMenuItemText, {
              textAlign: this.props.alignText,
              paddingRight: 32,
              paddingLeft: 32,
            }]}>{title}</Text>
          </View>
        </TouchableHighlight>
    );
  }
}

MainMenuItem.propTypes = {
  alignText: React.PropTypes.oneOf(['left', 'right']),
  scene: React.PropTypes.string,
  sceneProps: React.PropTypes.object,
}

MainMenuItem.defaultProps = {
  sceneProps: {},
}

class mainMenuScene extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.bg) {
      this.props.bg();
    }
  }

  render() {
    const lastAnimalItem = (this.props.lastAnimal === undefined) ? null : (
      <MainMenuItem navigator={this.props.navigator}
        alignText='right'
        scene={scenes.ANIMAL_DETAIL}
        sceneProps={{animal: this.props.lastAnimal}}
      />);

    return (
      <ScrollView style={localStyles.container} contentContainerStyle={localStyles.scrollItems}>
        <MainMenuItem navigator={this.props.navigator}
          alignText='left'
          scene={scenes.QR_READER}
        />

        <MainMenuItem navigator={this.props.navigator}
          alignText='right'
          scene={scenes.ANIMAL_LIST}
        />

        <MainMenuItem navigator={this.props.navigator}
          alignText='left'
          scene={scenes.EVENTS}
        />

        <MainMenuItem navigator={this.props.navigator}
          alignText='right'
          scene={scenes.ABOUT}
        />
      </ScrollView>
    );
  }
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 0,
  },
  scrollItems: {
    alignItems: 'center',
  },
  menuItemView: {
    width: Dimensions.get('window').width,
    height: 50,
  }
});

module.exports = mainMenuScene;
