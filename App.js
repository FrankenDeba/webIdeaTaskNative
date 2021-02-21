/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux"
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Button,
  Modal,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { fetchUsers } from './actions/actionCreators';
import Card from './components/Card';
import Form from './components/Form';

const App: () => React$Node = () => {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  const isLoading = useSelector(state => state.isLoading)
  const error = useSelector(state => state.error)
  const [ID, setID] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  // useEffect(() => {
  //   alert(isModalOpen)
  // },[isModalOpen])
  
  return (
    <View style = {{flex: 1}}>
       {isLoading ? 
        <Text>Loading...</Text>
        :
        null
      }
        {error ? 
        <Text>{error}</Text>
        :
        null
      }
      <ScrollView contentContainerStyle = {styles.container}>
        {
          users.map((user, index) => {
            const id = user.id
          return <View key = {user.id}>
                    <Card user = {user}/>
                    <View style = {styles.button}><Button title = "Update" onPress = {() => {
                                      setID(id)
                                      setIsModalOpen(!isModalOpen)
                                  }}>update</Button>
                    </View>
                                
                </View>
          })
        }
        <View style={styles.modalContainer}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={isModalOpen}
        onRequestClose={() => {
          setIsModalOpen(!isModalOpen);
        }}>
          <View style = {styles.modal}>
            <Text style = {styles.modalHeader}>Update User</Text>
            <Form setIsModalOpen = {setIsModalOpen} user = {users.find(user => user.id == ID)}/>
          </View>
          </Modal>
        </View>
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "20%",
    alignSelf: 'center'
  },
  modal: {
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "white",
    padding: 10,
    alignSelf: "center",
  },
  modalContainer: {
    flex: 1,
    width: "80%",
    alignItems: "center"
  },
  modalHeader: {
    backgroundColor: "blue",
    marginTop: 0,
    color: "white",
    textAlign: "center",
    padding: 5,
  }
});

export default App;
