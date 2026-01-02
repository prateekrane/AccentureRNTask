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
import { useNavigation } from "@react-navigation/native";

export default function Cart() {
  const { cart, increaseQty, decreaseQty, removeFromCart, total, clearCart } =
    useContext(CartContext);

  const navigation = useNavigation<any>();

  const placeOrder = () => {
    if (cart.length === 0)
      return Alert.alert("Cart empty", "Add items to place order");
    Alert.alert("Order placed", `Total: $${total.toFixed(2)}`);
    navigation.navigate("Home");
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
                ${item.price.toFixed(2)}
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
      />

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>Total Price</Text>

        {cart.map((item) => (
          <View key={item.id} style={styles.summaryRow}>
            <Text style={styles.summaryName}>{item.iname}</Text>
            <Text style={styles.summaryQty}>{item.quantity}</Text>
            <Text style={styles.summaryPrice}>
              ${(item.price * item.quantity).toFixed(2)}
            </Text>
          </View>
        ))}

        <View style={styles.totalRow}>
          <Text style={{ fontSize: 16, fontWeight: "700" }}>Total :</Text>
          <Text style={{ fontSize: 16, color: "#4A6D73", fontWeight: "700" }}>
            ${total.toFixed(2)}
          </Text>
        </View>

        <TouchableOpacity style={styles.placeBtn} onPress={placeOrder}>
          <Text style={{ color: "white", fontWeight: "700" }}>Place Order</Text>
        </TouchableOpacity>
      </View>
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
  summaryContainer: { padding: 16 },
  summaryTitle: { fontSize: 18, fontWeight: "700", marginBottom: 12 },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    alignItems: "center",
  },
  summaryName: { flex: 1, fontSize: 14 },
  summaryQty: { width: 40, textAlign: "center" },
  summaryPrice: { width: 80, textAlign: "right", fontWeight: "700" },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
});
