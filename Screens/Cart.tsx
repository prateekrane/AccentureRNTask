import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useContext } from "react";
import { CartContext } from "../Components/CartContext";

export default function Cart() {
  const { cart, increaseQty, decreaseQty, removeFromCart, total, clearCart } =
    useContext(CartContext);

  const placeOrder = () => {
    if (cart.length === 0)
      return Alert.alert("Cart empty", "Add items to place order");
    Alert.alert("Order placed", `Total: $${total}`);
    clearCart();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={() => (
          <View style={{ padding: 16 }}>
            <Text style={{ fontSize: 18, fontWeight: "700" }}>
              Review Item And Shipping
            </Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Image source={{ uri: item.imageuri }} style={styles.itemImg} />
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "700" }}>
                {item.iname}
              </Text>
              <Text style={{ color: "gray" }}>{item.brand}</Text>
              <Text style={{ marginTop: 8, fontWeight: "700" }}>
                ${item.price}
              </Text>
            </View>
            <View style={styles.qtyCnt}>
              <TouchableOpacity
                onPress={() => decreaseQty(item.id)}
                style={styles.qtyBtn}
              >
                <Text>-</Text>
              </TouchableOpacity>
              <Text style={{ marginHorizontal: 8 }}>{item.quantity}</Text>
              <TouchableOpacity
                onPress={() => increaseQty(item.id)}
                style={styles.qtyBtn}
              >
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListFooterComponent={() => (
          <View style={{ padding: 20 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "700" }}>Total :</Text>
              <Text
                style={{ fontSize: 18, color: "#4A6D73", fontWeight: "700" }}
              >
                ${total}
              </Text>
            </View>
            <TouchableOpacity style={styles.placeBtn} onPress={placeOrder}>
              <Text style={{ color: "white", fontWeight: "700" }}>
                Place Order
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  itemCard: {
    flexDirection: "row",
    padding: 12,
    marginHorizontal: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 8,
    alignItems: "center",
  },
  itemImg: { width: 80, height: 80, borderRadius: 8 },
  qtyCnt: { flexDirection: "row", alignItems: "center" },
  qtyBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  placeBtn: {
    backgroundColor: "#4A6D73",
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: "center",
  },
});
