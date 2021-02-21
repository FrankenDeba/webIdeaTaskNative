import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

function Card(props) {
    const { user } = props
    return (
        <View style = {styles.container}>
            <View style = {styles.listItem}>
                <Text>Name: </Text>
                <Text>{user.name}</Text>
            </View>

            <View style = {styles.listItem}>
                <Text>E-mail: </Text>
                <Text>{user.email}</Text>
            </View>

            <View style = {styles.listItem}>
                <Text>Usrname: </Text>
                <Text>{user.username}</Text>
            </View>

            <View style = {styles.listItem}>
                <Text>Phone No: </Text>
                <Text>{user.phone}</Text>
            </View>

            <View style = {styles.listItem}>
                <Text>Website: </Text>
                <Text>{user.website}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#ddd",
        padding: 30,
        margin: 20,
        backgroundColor: "white",
    },
    listItem: {
        flex: 1,
        flexDirection: "row",
        margin: 10,
        padding: 5,
        backgroundColor: "#F6F6FF",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#ddd",
    }
})

export default Card
