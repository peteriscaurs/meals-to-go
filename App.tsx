import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, StatusBar, Text, SafeAreaView, View } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text>SEARCH</Text>
        </View>
        <View style={styles.list}>
          <Text>LIST</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    backgroundColor: "crimson",
    justifyContent: "center",
    padding: 16,
  },
  list: {
    flex: 1,
    backgroundColor: "tomato",
    padding: 16,
  },
});
