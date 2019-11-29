import React, {Component} from 'react';
import {Button, ScrollView, Text, View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import ModalBaseScene from '../utils/ModalBaseScene';

type State = {
  scrollOffset: null | number,
};

function TimeLine(props) {
  let s = {};
  if (props.style % 2 === 0) {
    s = {
      height: 70,
      backgroundColor: '#A9DCD3',
      alignItems: 'center',
      justifyContent: 'center',
    };
  } else {
    s = {
      height: 70,
      backgroundColor: '#87BBE0',
      alignItems: 'center',
      justifyContent: 'center',
    };
  }
  return (
    <View style={s}>
      <Text style={styles.scrollableModalText1}>{props.data.time}</Text>
    </View>
  );
}

export default class Agenda extends ModalBaseScene {
  scrollViewRef: React.RefObject<ScrollView>;
  times = [];
  data = [];
  constructor(props) {
    super(props, {
      scrollOffset: null,
    });
    this.scrollViewRef = React.createRef();
    this.state = {
      isModalVisible: false,
    };
    this.data = [
      {time: '8:30 - 9:30 : Good morning'},
      {time: '8:30 - 9:30 : Good morning'},
      {time: '8:30 - 9:30 : Good morning'},
      {time: '8:30 - 9:30 : Good morning'},
      {time: '8:30 - 9:30 : Good morning'},
      {time: '8:30 - 9:30 : Good morning'},
      {time: '8:30 - 9:30 : Good morning'},
    ];
    for (let i = 0; i < this.data.length; i++) {
      this.times.push(<TimeLine style={i+1} data={this.data[i]} />);
    }
  }

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  handleOnScroll = event => {
    this.setState({
      scrollOffset: event.nativeEvent.contentOffset.y,
    });
  };
  handleScrollTo = p => {
    if (this.scrollViewRef.current) {
      this.scrollViewRef.current.scrollTo(p);
    }
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <Button title="Show modal" onPress={this.toggleModal} />
        <Modal
          isVisible={this.state.isModalVisible}
          testID={'modal'}
          onSwipeComplete={this.close}
          swipeDirection={['down']}
          scrollTo={this.handleScrollTo}
          scrollOffset={this.state.scrollOffset}
          scrollOffsetMax={400 - 300} // content height - ScrollView height
          style={styles.modal}>
          <View style={styles.scrollableModal}>
            <ScrollView
              ref={this.scrollViewRef}
              canCancelContentTouches={true}
              centerContent={true}
              onScroll={this.handleOnScroll}
              scrollEventThrottle={16}>
              {/*<View style={styles.scrollableModalContent1}>*/}
              {/*  <Text style={styles.scrollableModalText1}>*/}
              {/*    8:30 - 9:30 : Good morning*/}
              {/*  </Text>*/}
              {/*</View>*/}
              {/*<View style={styles.scrollableModalContent2}>*/}
              {/*  <Text style={styles.scrollableModalText1}>*/}
              {/*    8:30 - 9:30 : Good morning*/}
              {/*  </Text>*/}
              {/*</View>*/}
              {this.times}
            </ScrollView>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  scrollableModal: {
    height: 300,
  },
  scrollableModalContent1: {
    height: 70,
    backgroundColor: '#87BBE0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText1: {
    fontSize: 20,
    color: 'white',
  },
  scrollableModalContent2: {
    height: 70,
    backgroundColor: '#A9DCD3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText2: {
    fontSize: 20,
    color: 'white',
  },
});
