import { useState } from "react";
import {View, Text, StyleSheet, TextInput, Button} from "react-native"
export default function App() {
    let [name, setName]=useState("");
    let [lastName, setLastName]=useState("");
    let [password, setPassword]=useState("");
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder="Name" onChangeText={setName}/>
                <TextInput style={styles.input} placeholder="Last name" onChangeText={setLastName}/>
                <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} onChangeText={setPassword}/>
                {/* Buttons have no style property, width nor height. You can use <TouchableOpacity> */}
                <Button title="Show data on console" color={"#06D001"} onPress={()=>{console.log({name,lastName,password})}}/>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eee"
    },
    form: {
        borderColor: "#999",
        borderStyle: "solid",
        borderWidth: 1,
        width: 300,
        height: 250
    },
    input: {
        backgroundColor: "white",
        margin: 10,
        borderColor: "#999",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 5
    }
});