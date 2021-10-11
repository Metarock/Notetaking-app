import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { ViewNotes, AddNotes } from '../screens/Index';

const StackNavigator = createStackNavigator(
    {
        ViewNotes: {
            screen: ViewNotes
        },
        AddNotes: {
            screen: AddNotes
        }
    },
    {
        initialRouteKey: 'ViewNotes',
        headerMode: 'none',
        mode: 'modal'
    })

export default createAppContainer(StackNavigator)