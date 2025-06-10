import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import TelaInicial from './screens/TelaInicial';
import TelaLivro from './screens/TelaLivro';
import Biblioteca from './screens/Biblioteca';
import Perfil from './screens/Perfil';
import Configuracoes from './screens/Configuracoes';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Inicio" component={TelaInicial} />
      <Stack.Screen name="Livro" component={TelaLivro} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Início') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Biblioteca') {
            iconName = focused ? 'library' : 'library-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6200ee',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Início" component={HomeStack} />
      <Tab.Screen name="Biblioteca" component={Biblioteca} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: '#6200ee',
          drawerLabelStyle: { marginLeft: 20 },
        }}
      >
        <Drawer.Screen 
          name="Principal" 
          component={TabNavigator}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="home" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="Configurações" 
          component={Configuracoes}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="settings" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="Sobre" 
          component={Biblioteca}
          options={{
            drawerIcon: ({ color }) => (
              <MaterialIcons name="info" size={22} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}