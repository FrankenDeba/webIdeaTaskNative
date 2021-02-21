import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Modal, View, Text, StyleSheet, TextInput, Button, ActivityIndicator } from "react-native"
import { updateUser } from '../actions/actionCreators'
function Form(props) {
    const { user, setIsModalOpen } = props
    const [ name, setName ] = useState(user.name)
    const [ email, setEmail ] = useState(user.email)
    const [ phone, setPhone ] = useState(user.phone)
    const [ username, setUsername ] = useState(user.username)
    const [ website, setWebsite ] = useState(user.website)
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.isLoading)
    const cancel = () => {
        setName(user.name)
        setEmail(user.email)
        setPhone(user.phone)
        setUsername(user.username)
        setWebsite(user.website)
        setIsModalOpen(false)
    }
    const update = () => {
        dispatch(updateUser({
            ...user,
            name,
            email,
            phone,
            username,
            website
        }))
        setIsModalOpen(false)
    }
    return (
        <View>{isLoading ? <ActivityIndicator /> :
            <View style = {styles.container}>
                <View style = {styles.inputHolder}><Text>Name: </Text><TextInput style = {styles.input} value = {name} onChangeText = {text => setName(text)}></TextInput></View>
                <View style = {styles.inputHolder}><Text>E-mail: </Text><TextInput style = {styles.input} value = {email} onChangeText = {text => setEmail(text)}></TextInput></View>
                <View style = {styles.inputHolder}><Text>Phone No: </Text><TextInput style = {styles.input} value = {phone} onChangeText = {text => setPhone(text)}></TextInput></View>
                <View style = {styles.inputHolder}><Text>Username: </Text><TextInput style = {styles.input} value = {username} onChangeText = {text => setUsername(text)}></TextInput></View>
                <View style = {styles.inputHolder}><Text>Website: </Text><TextInput style = {styles.input} value = {website} onChangeText = {text => setWebsite(text)}></TextInput></View>
                    <View style = {styles.buttonsList}>
                        <View style = {styles.cancelButton}><Button color = "red" title = "cancel" onPress = {() => cancel()}></Button></View>
                        <View style = {styles.updateButton}><Button title = "update" onPress = {() => update()}></Button></View>
                    </View>
            </View>}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
    },
    input: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#ddd",
        width: "60%",
        alignSelf: "flex-end",
        padding: 5,
        margin: 10,
    },
    buttonsList: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    cancelButton: {
        backgroundColor: "red",
    },
    updateButton: {
        alignSelf: "flex-end"
    },
    inputHolder: {
        flexDirection: "row",
        alignItems: "center",
        // width: "100%",
        justifyContent: "space-between"
    }
})

export default Form
