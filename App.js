import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { SvgXml } from "react-native-svg"
import { FontAwesome5, AntDesign,Entypo  } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { Theme } from "./config/Themes";

const FiguraSVGHeader = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#EAEAEA" fill-opacity="1" d="M0,64L120,64C240,64,480,64,720,106.7C960,149,1200,235,1320,277.3L1440,320L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
</svg>
`

const FiguraSVGFooter = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#EAEAEA" fill-opacity="1" d="M0,96L120,128C240,160,480,224,720,245.3C960,267,1200,245,1320,234.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
</svg>
`
const SLIDER_WIDTH = Dimensions.get('window').width;
const scale = SLIDER_WIDTH / 320;

import TipoCambio from "./pages/TipoCambio";
import CambioPorFecha from "./pages/CambioPorFecha";
import ObtenerSolicitudes from "./pages/ObtenerSolicitudes";
import ObtenerPromedio from "./pages/ObtenerPromedio";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Theme.colorPrimary, },
          tabBarActiveTintColor: Theme.colorPrimary,
          tabBarInactiveTintColor: Theme.colorBlack30 ,
          headerTitleStyle: { color: Theme.colorSecundary},
          headerTitleAlign: 'center',
          headerTitleAllowFontScaling: true,

        }}
      >
        <Tab.Screen name="Tipo Cambio" component={TipoCambio}
          options={{
            tabBarIcon: ({ color, size }) => (<FontAwesome5 name="money-check-alt" color={color} size={(size - 5) * scale} />)
          }}
        />
        <Tab.Screen name="Cambio por fecha" component={CambioPorFecha}
          options={{
            tabBarIcon: ({ color, size }) => (<FontAwesome5 name="file-contract" color={color} size={(size - 5) * scale} />)
          }}
        />
        <Tab.Screen name="Obtener Solicitudes" component={ObtenerSolicitudes}
          options={{
            tabBarIcon: ({ color, size }) => (< AntDesign name="calculator" color={color} size={(size - 5) * scale} />)
          }}
        />
        <Tab.Screen name="Promedio" component={ObtenerPromedio}
          options={{
            tabBarIcon: ({ color, size }) => (<Entypo  name="bar-graph" color={color} size={(size - 5) * scale} />)
          }}
        />        
      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
