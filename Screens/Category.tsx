import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { categoriesList } from "../Data/DataLists";
import RenderCatagories from "../Components/RenderCatagories";

export default function Category() {
  const catobj = categoriesList;
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => {
          return (
            <View
              style={{
                justifyContent: "flex-start",
                height: 40,
                width: "100%",
              }}
            >
              <Text
                style={{ fontSize: 25, fontWeight: "600", color: "#7fb9c3ff" }}
              >
                Categories
              </Text>
            </View>
          );
        }}
        numColumns={2}
        data={catobj}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <RenderCatagories catName={item.category} imgurl={item.image} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e6f6faff",
  },
});
