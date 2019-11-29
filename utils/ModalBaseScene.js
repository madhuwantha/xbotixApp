import React, {Component} from 'react';
import {Button, StyleSheet, View} from 'react-native';

type State = P & {
  visible: boolean,
};

export default class ModalBaseScene extends Component {
  constructor(props, state?: P) {
    super(props);
    this.state = {
      ...state,
      visible: false,
    };
  }

  open = () => this.setState({visible: true});
  close = () => this.setState({visible: false});
  isVisible = () => this.state.visible;
  renderButton(): React.ReactElement<any> {
    return (
      <Button testID={'modal-open-button'} onPress={this.open} title="Open" />
    );
  }
  render() {
    return (
      <View style={styles.view}>
        {this.renderButton()}
        {this.renderModal()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
