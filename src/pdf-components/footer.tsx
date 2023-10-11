import React from "react";
import { View, Text } from "@react-pdf/renderer";
import styles from "./styles";
import Divider from "./divider";
import { colors } from "./colors";

function Footer() {
  return (
    <View style={styles.footer}>
      <Divider />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <Text style={[styles.h4, styles.textBold, { color: colors.primary }]}>
          Report Genereted on September 26, 2023
        </Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={[styles.h4, styles.textBold]}>
            RealAssist Property Report | Page 1
          </Text>
          <Text style={[styles.h4, styles.textBold, { color: colors.secondText, marginLeft: 4 }]}>of 25</Text>
        </View>
      </View>
    </View>
  );
}

export default Footer;
