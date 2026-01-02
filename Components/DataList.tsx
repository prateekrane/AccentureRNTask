import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ProductListType } from "../Data/DataLists";
import { useNavigation } from "@react-navigation/native";

export default function DataList(props: { items: ProductListType }) {
  const navigation = useNavigation<any>();
  const { items } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("itemdisplay", { items })}
      >
        <View style={styles.imgCnt}>
          <Image
            source={{ uri: items.imageuri }}
            style={styles.imgStyle}
            resizeMode="cover"
          />
        </View>
        <View style={{ padding: 5 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              {items.iname}
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              {items.price}
            </Text>
          </View>
          <Text>{items.brand}</Text>
          <Text>{items.ratting}/5</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.addCartcnt}>
        <TouchableOpacity>
          <Text style={{ fontSize: 10, fontWeight: "bold" }}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 250,
    width: 180,
    borderWidth: 1,
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  imgCnt: {
    height: "60%",
    width: "100%",
  },
  imgStyle: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },
  addCartcnt: {
    height: 25,
    width: 80,
    borderWidth: 1,
    marginLeft: 5,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
