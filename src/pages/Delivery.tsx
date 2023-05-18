import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, Text} from 'react-native';

import Ing from './Ing';
import Complete from './Complete';

const Stack = createNativeStackNavigator();

function Delivery() {
  return (
    <SafeAreaView>
      <Text>지도</Text>
      <Stack.Navigator initialRouteName="Ing">
        <Stack.Screen
          name="Ing"
          component={Ing}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="Complete"
          component={Complete}
          options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </SafeAreaView>
  );
}

export default Delivery;
