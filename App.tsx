import { PaperProvider } from "react-native-paper";
import { theme } from "./src/styles";
import { LoginScreen, QuestionnaireScreen, SignupScreen } from "./src/component/screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="QuestionnaireScreen" component={QuestionnaireScreen} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}


