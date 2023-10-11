import React from "react";
import { View, Image, Text } from "@react-pdf/renderer";
import styles from "./styles";

function Header() {
  return (
    <View style={styles.header}>
      <Image src="icons/logo.png" style={{ width: 92 }} />
      <Text style={[styles.h4, styles.textBold]}>
        123 Main Street, Dover, NH 03820-4667
      </Text>
    </View>
  );
}

export default Header;
