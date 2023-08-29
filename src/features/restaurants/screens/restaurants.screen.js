import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, StatusBar, Text, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const SafeViewStyle = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight + 1}px`};
`;

const SearchStyled = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const ListStyled = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => (
  <SafeViewStyle style={styles.container}>
    <SearchStyled>
      <Searchbar />
    </SearchStyled>
    <ListStyled>
      <RestaurantInfoCard />
    </ListStyled>
    <ExpoStatusBar style="auto" />
  </SafeViewStyle>
);

const styles = StyleSheet.create({});
