import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {
  const [OswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [LatoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!OswaldLoaded || !LatoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
    </>
  );
}

const styles = StyleSheet.create({});
