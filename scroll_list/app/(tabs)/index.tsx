import { StatusBar, StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import PrintArticles from "@/components/PrintArticles";

export default function HomeScreen() {
  return(
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <PrintArticles size={20}/>
      </View>
    </View>
  );
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center"
  },
  listContainer: {
    borderColor: "black",
    borderWidth: 2,
    borderStyle: "solid",
    margin: 5,
    maxHeight: 500,
    width: Dimensions.get("window").width-10
  }
});