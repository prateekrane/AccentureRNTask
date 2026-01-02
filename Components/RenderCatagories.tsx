import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function RenderCatagories(props: {
  catName: string;
  imgurl: string;
}) {
  const navigation = useNavigation<any>();
  const catval = props.catName;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: props.imgurl }}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.imageStyle}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("DetailList", catval)}
        >
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>{props.catName}</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 180,
    width: 150,
    marginBottom: 12,
    marginHorizontal: 16,
    marginTop: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
  },
  imageStyle: {
    borderRadius: 10,
  },
  labelContainer: {
    position: "absolute",
    top: 8,
    left: 8,
    right: 8,
    backgroundColor: "rgba(0,0,0,0.45)",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  labelText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});
