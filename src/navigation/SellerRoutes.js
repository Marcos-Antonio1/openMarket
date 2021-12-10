import React  from "react";
import { createStackNavigator } from '@react-navigation/stack';
import {HomeSeller} from '../screens/seller/HomeSeller';
import { MyProduct } from '../screens/seller/MyProduct';
import { EditProduct } from "../screens/seller/EditProduct";
import { RegistrationProduct} from "../screens/seller/RegistrationProduct";
import { UpdateOrder } from "../screens/seller/UpdateOrder";


const Stack = createStackNavigator();
export const SellerRoutes = () => {
    
    return (
        <Stack.Navigator initialRouteName="HomeSeller">
            <Stack.Screen
            name="HomeSeller"
            component={HomeSeller}
            />
            <Stack.Screen
            name="MyProduct"
            component={ MyProduct }
            />
            <Stack.Screen
            name="EditProduct"
            component={ EditProduct }
            />
            <Stack.Screen
            name="RegistrationProduct"
            component={ RegistrationProduct }
            />
            <Stack.Screen
            name="UpdateOrder"
            component={ UpdateOrder}/>
        </Stack.Navigator>
    );
}