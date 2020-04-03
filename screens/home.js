import React, { useState, useEffect, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  ActivityIndicator,
  AsyncStorage,
  TouchableOpacity
} from "react-native";
import TodoItem from "../components/todoItem";
import AddTodo from "../components/addTodo";
// import ReviewDetails from "./reviewDetails";
import Constants from "expo-constants";
import * as firebase from "firebase";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export default function Home({ navigation }) {

  
  // const [todos, setTodos] = useState([
  //   {text:'kjhkjj', key:'1', completed: false}
  // ]);

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
      .then(response => response.json())
      .then(response => {
        setTodos(response), 
        setLoading(false);
      })
      .catch(e => {
        console.error(e);
      });
  }, []);

  


  const pressHandler = id => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id != id);
    });
  };

  const pressHandler1 = (item) => {
    navigation.navigate("ReviewDetails", {item, edit});
      };

  const pressHandler2 = id => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => {
        if ((todo.id != id) == false) {
          todo.completed = !todo.completed;
        }
        return true;
      });
    });
  };

  const edit = (id, title) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo =>{
        if((todo.id != id) == false){
          todo.title = title;
        }
        return true;
      });
    });
    navigation.navigate('Home');
  }

  const submitHandler = title => {
    if (title.length > 3) {
      setTodos(prevTodos => {
        return [
          { title: title, id: Math.random().toString(), completed: false },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert("OOPS!", "Todos must over 3 chars long", [
        { title: "Understood", onPress: () => console.log("alert closed") }
      ]);
    }
  };

  const Refresh = async () => {
    setLoading(!loading);
    return fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
    .then(response => response.json())
    .then(response => {
      setTodos(response), 
      setLoading(false);
    })
    .catch(e => {
      console.error(e);
    });
  }
  
  const OnSignOut = () => {
    firebase.auth().signOut();
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("dismissed keyboard");
      }}
    >
      <View style={styles.container}>
        <View style={styles.contant}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            {(loading)?(
              <ActivityIndicator size="large" color="coral" />
            )
            :( 
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                // <TouchableOpacity onPress={() => navigation.navigate("ReviewDetails", {edit})} >
                  <TodoItem
                    item={item}
                    pressHandler={pressHandler}
                    pressHandler1={pressHandler1}
                    pressHandler2={pressHandler2}
                    edit={edit}
                  />
                  // </TouchableOpacity>
              )}
            />
            )}
          </View>

        </View>
        {/* <View style= {styles.c}> */}
        {/* <Button title="SignOut" color='red' onPress={OnSignOut} style= {styles.c} /> */}
        {/* </View> */}
        <View style= {styles.c}>
        <Button title="Refresh" color="coral"  onPress={Refresh} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  c: {
    width: 250, 
    height: 40,
    alignSelf: 'center',    
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contant: {
    padding: 40,
    // backgroundColor: "#666",
    flex: 1
  },
  list: {
    marginTop: 28,
    flex: 1
  }
});
