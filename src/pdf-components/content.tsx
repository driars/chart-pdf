import React from "react";
import { View, Text } from "@react-pdf/renderer";
import styles from "./styles";

function Content() {
  return (
    <View style={{ height: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.h3}>Content</Text>
    </View>
  );
}

export default Content;
