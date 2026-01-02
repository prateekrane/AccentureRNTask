import react from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/mainLogo.png")} style={styles.imgsty} />
      <View style={styles.txtcnt}>
        <Text style={styles.maintxt}>Shopping and Department Store.</Text>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.minitxt}>
            Shopping is a bit of a relaxing hobby for me, which is something
            troubling for the bank balance.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgsty: {
    height: "50%",
    width: "100%",
  },
  txtcnt: {
    paddingLeft: 10,
    height: "25%",
    width: "100%",
    backgroundColor: "#b5e8efff",
  },
  maintxt: {
    fontSize: 44,
    color: "#29464bff",
    fontWeight: "800",
  },
  minitxt: {
    fontSize: 15,
    fontWeight: "500",
    color: "#292c2cff",
  },
});
