import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import * as firebase from "firebase";

export default function Header1(){
    const OnSignOut = () => {
        firebase.auth().signOut();
      }
    
    return(
        <View >
            <TouchableOpacity onPress={OnSignOut}>
              <Text style={styles.title1}>SignOut</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    title1: { 
        textDecorationLine: 'underline',
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 1,
        right: 20
    } 
})