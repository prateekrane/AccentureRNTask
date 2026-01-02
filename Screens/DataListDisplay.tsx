import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { ProductListType, productsDataList } from "../Data/DataLists";
import DataList from "../Components/DataList";

export default function DataListDisplay(props: any) {
  const { route } = props;
  const categoryName = route.params;
  const [data, setData] = useState<ProductListType[]>(productsDataList);
  const [originalData, setOriginalData] =
    useState<ProductListType[]>(productsDataList);

  useEffect(() => {
    function UpdateCatList() {
      const updatedList = originalData.filter(
        (item) => item.category === categoryName
      );
      setData(updatedList);
    }
    UpdateCatList();
  }, [categoryName]);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <DataList items={item} />}
        numColumns={2}
        ListHeaderComponent={() => {
          return (
            <View
              style={{
                height: 50,
                justifyContent: "center",
                backgroundColor: "#cceef5ff",
                paddingLeft: 20,
              }}
            >
              <Text
                style={{ color: "#375256ff", fontSize: 20, fontWeight: "800" }}
              >
                Categories/{categoryName}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
