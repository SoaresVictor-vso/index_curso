import Home from './src/screens/Home/index.js';
import Search from './src/screens/Search/index.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-web';
import styles from './src/default/style.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    //<SafeAreaView>
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}} style={styles.page}/>
          <Stack.Screen name="Search" component={Search} options={{headerShown:false}} style={styles.page}/>
        </Stack.Navigator>
      </NavigationContainer>
   // </SafeAreaView>
  );
}




