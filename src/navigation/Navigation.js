import { createStackNavigator } from "@react-navigation/stack";
import TaskDetailScreen from "../screens/TaskDetailScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HourBlocksScreen from "../screens/HourBlocksScreen";
import TaskListScreen from "../screens/TaskListScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from 'native-base';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'black', // This sets the tab bar background color to black
          borderTopWidth: 0, // This can remove the border on the top of the tab bar if desired
        },
        tabBarActiveTintColor: "#fda200",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Hour Blocks"
        component={HourBlocksScreen}
        options={{
          header: () => null,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="today-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Task Lists"
        component={TaskListScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Dashboard" component={TabNavigator} />
        <Stack.Screen name="TaskDetail" component={TaskDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
