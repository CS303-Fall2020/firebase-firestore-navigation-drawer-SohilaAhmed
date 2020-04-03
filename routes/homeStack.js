import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import ForgotPassword from '../screens/ForgotPassword';
import main from '../screens/main'
import loading from '../screens/loading'
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import React from 'react';
import Header from '../components/header'
import Header1 from '../components/header1'
import MyDrawer from './drawer'

const screens = {
    // loading: {
    //     screen: loading,
    //     navigationOptions: {
    //         title: 'loading',
    //         headerLeft: null,
    //         headerStyle: {
    //             backgroundColor:'coral',
    //         }
    //     }
    // },
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login',
            headerLeft:  () => null,
            headerStyle: {
                backgroundColor:'coral'
            }
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: 'SignUp',
            headerLeft:  () => null,
            headerStyle: {
                backgroundColor:'coral'
            }
        }
    },
    ForgotPassword: {
        screen: ForgotPassword,
        navigationOptions: {
            title: 'ForgotPassword',
            headerLeft:  () => null,
            headerStyle: {
                backgroundColor:'coral'
            }
        }
    },
    Main: {
        screen: main,
        navigationOptions: {
            title: 'main',
            headerLeft:  () => null,
            headerStyle: {
                backgroundColor:'coral'
            }
        }
    },
    // Home: {
    //     screen: Home,
    //     navigationOptions: {
    //         headerTitle: () => <Header />,
    //         headerLeft: null,
    //         headerStyle: {
    //             backgroundColor:'coral',
    //         },
    //         headerRight: () => <Header1 />
    //     }
    // },
    // ReviewDetails: {
    //     screen: ReviewDetails,
    //     navigationOptions: {
    //         title: 'ToDo Details',
    //         headerStyle: {
    //             backgroundColor:'coral'
    //         }
    //     }
    // }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack); 




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
//       {/* <Stack.Screen
//         name="Home"
//         component={Home}
//         options={{
//           headerTitle: () => <Header />,
//           headerLeft: null,
//           headerRight: () => <Header1 />
//         }}
//       ></Stack.Screen> */}
//       <Stack.Screen
//         name="Login"
//         component={Login}
//         options={{
//           title: "Login"
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
