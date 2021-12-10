import React  from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { HomeBuyer } from '../screens/buyer/HomeBuyer';
import { OrdemTracking } from '../screens/buyer/OrderTracking';
import { ProductBuyer} from '../screens/buyer/ProductBuy';
import {SeachProducts} from '../screens/buyer/SearchProducts'; 
import { ShoppingCart } from '../screens/buyer/ShoppingCart';
 
const Stack = createStackNavigator();
export const BuyerRoutes = () => {
    
    return (
        <Stack.Navigator initialRouteName="HomeBuyer">
            <Stack.Screen
            name="HomeBuyer"
            component={HomeBuyer}
            options ={
                {headerShown:false}
             }
            />

            <Stack.Screen
            name="OrderTracking"
            component={ OrdemTracking }
            />

            <Stack.Screen
            name="ProductBuyer"
            component={ ProductBuyer}
            />

            <Stack.Screen
            name="SearchProducts"
            component={ SeachProducts }
            />

            <Stack.Screen
            name="ShoppingCart"
            component={ ShoppingCart }
            /> 
        </Stack.Navigator>
    );
}