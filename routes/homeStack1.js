import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import React from 'react';
import Header from '../components/header'
import Header1 from '../components/header1'
import Header2 from '../components/header2'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return{
            headerLeft: () => <Header2 navigation={navigation} /> ,
            headerTitle: () => <Header />,
            headerRight: () => <Header1 />,
            headerStyle: {
                backgroundColor:'coral',
            },
        }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'ToDo Details',
            headerStyle: {
                backgroundColor:'coral'
            }
        }
    }
}

const HomeStack = createStackNavigator(screens);

// export default createAppContainer(HomeStack); 
export default HomeStack;