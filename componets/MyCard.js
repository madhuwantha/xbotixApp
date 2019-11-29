import React, {Component} from 'react';
import {
  Modal,
  SafeAreaView,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import List from './SectionList';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];
//
// function Item({title}) {
//   return (
//     <View style={styles1.item}>
//       <Text style={styles1.title}>{title}</Text>
//     </View>
//   );
// }
//
// function List() {
//   return (
//     <SafeAreaView style={styles1.container}>
//       <FlatList
//         data={DATA}
//         renderItem={({item}) => <Item title={item.title} />}
//         keyExtractor={item => item.id}
//       />
//     </SafeAreaView>
//   );
// }

export default class MyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
          }}>
          <View style={styles.model}>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text>8:30 - 9.30 : Good Morning</Text>
                <Text>8:30 - 9.30 : Good Morning</Text>
                <Text>8:30 - 9.30 : Good Morning</Text>
                <Text>8:30 - 9.30 : Good Morning</Text>
              </View>
              <View style={styles.sectionContainer} />
            </View>
            <View>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <View>
            <Text style={styles.sectionTitle}>Agenda</Text>
            <Text style={styles.sectionDescription}>
              Click here to see the agenda of the event
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
  },
  title: {
    fontSize: 24,
  },
});

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 5,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  buttonContent: {
    padding: 0,
    marginHorizontal: 10,
  },
  model: {
    borderColor: '#000000',
    marginVertical: 40,
    marginHorizontal: 20,
    backgroundColor: '#ee82ee',
  },
});
