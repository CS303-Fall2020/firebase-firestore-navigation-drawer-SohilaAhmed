import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Profile from "../screens/profile";
import React from 'react';
import Header from '../components/header'
import Header1 from '../components/header1'
import Header2 from '../components/header2'

const screens = {
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Profile",
        headerLeft: () => <Header2 navigation={navigation} />,
        headerRight: () => <Header1 />,
        headerStyle: {
          backgroundColor: "coral"
        }
      };
    }
  }
};

const ProfileStack = createStackNavigator(screens);

export default ProfileStack;
