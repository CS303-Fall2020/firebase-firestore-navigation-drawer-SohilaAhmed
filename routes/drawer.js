import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'

import HomeStack from "./homeStack1";
import ProfileStack from './profileStack';
import Profile from "../screens/profile"
import Header3 from '../components/header3'
import React from 'react';


const RootDrawerNavigation = createDrawerNavigator({
    Home: {
        screen: HomeStack
    },
    Profile: {
        screen: ProfileStack,
        navigationOptions: { 
            drawerLabel: () => <Header3 />,
            
        }
    }
});

export default createAppContainer(RootDrawerNavigation);

// import { createAppContainer, StackRouter } from "react-navigation";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// // import { createStackNavigator } from "@react-navigation/stack";
// import React, { Component } from "react";
// import HomeStack from "./homeStack";
// import { createStackNavigator } from "@react-navigation/stack";

// import Home from "../screens/home";
// import Profile from "../screens/profile";
// import homeStack from "./homeStack";

// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// {
//   /* <Stack.Navigator
// screenOptions={{
// //   headerStyle: styles.header,
//   headerTintColor: '#fff',
// //   headerTitleStyle: styles.title,
// }}>
// <Stack.Screen name="Home" options={{ title: 'Home' }}>
//   {() => {}}
// </Stack.Screen>
// </Stack.Navigator>  */
// }

// export default class MyDrawer extends Component {
//   render() {
//     // const creatHomeStack = () => {
//     //   <Stack.Navigator>
//     //     <Stack.Screen
//     //       name="Home"
//     //       component="Home"
//     //       option={{
//     //         title: "Home",
//     //         headerLeft: null,
//     //         headerStyle: {
//     //           backgroundColor: "coral"
//     //         }
//     //       }}
//     //     />
//     //     <Stack.Screen
//     //       name="Profile"
//     //       component="Profile"
//     //       option={{
//     //         title: "Profile",
//     //         headerLeft: null,
//     //         headerStyle: {
//     //           backgroundColor: "coral"
//     //         }
//     //       }}
//     //     />
//     //   </Stack.Navigator>;
//     // };
//     return (
//       <Drawer.Navigator>
//         <Drawer.Screen name="HomeStack" children={Home} />
//         <Drawer.Screen name="Profile" component={Profile} />
//       </Drawer.Navigator>
//     );
//   }
// }

// import * as React from "react";
// import { createStackNavigator } from "@react-navigation/stack";

// import { StyleSheet } from "react-native";

// import Home from "../screens/home";
// import Header from "../components/header";
// import Header1 from "../components/header1";
// import ReviewDetails from "../screens/reviewDetails";

// const Stack = createStackNavigator();

// export default function MainNavigation() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: styles.header,
//         headerTintColor: "#fff",
//         headerTitleStyle: styles.title
//       }}
//     >
//       <Stack.Screen
//         name="Home"
//         component={Home}
//         options={{
//           headerTitle: () => <Header />,
//           headerLeft: null,
//           headerRight: () => <Header1 />
//         }}
//       ></Stack.Screen>
//       <Stack.Screen
//         name="ReviewDetails"
//         component={ReviewDetails}
//         options={{
//           title: "ToDo Details"
//         }}
//       ></Stack.Screen>
//     </Stack.Navigator>
//   );
// }

// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: "coral"
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: "bold"
//   }
// });
