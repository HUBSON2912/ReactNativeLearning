import { View, Text, StyleSheet, StatusBar, Image} from "react-native"

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hit me hard and soft</Text>
      <Image source={{uri: "https://imgs.search.brave.com/ual7dPeP2034QaUwVnpngLcrTpfvGDBlGb4KnrlbRtw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudGhlLWluZGVw/ZW5kZW50LmNvbS8y/MDI0LzA1LzE3LzE4/L1JFU0UlQzMlOTFB/LUJJTExJRV9FSUxJ/U0hfODI4MTAuanBn"}} height={300} width={300}/>
    </View>
  );
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    gap: 50,
    backgroundColor: "#0e1d32",
    paddingTop: StatusBar.currentHeight,
    justifyContent:"center",
    alignItems: "center"
  },

  text: {
    color: "white",
    fontSize: 25
  }
});