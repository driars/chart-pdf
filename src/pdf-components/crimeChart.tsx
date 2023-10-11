import React from "react";
import { View, Text } from "@react-pdf/renderer";
import ReactPDFChart from "react-pdf-charts";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import type { Arrest } from "types/arrest";

import styles from "./styles";
import { colors } from "./colors";

function CrimeChart({ data } : { data: Arrest[] }) {
  return (
    <View style={{ marginTop: 8 }}>
      <View
        style={{
          height: 24,
          backgroundColor: colors.paper,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 13,
          borderTopLeftRadius: 13,
          borderTopRightRadius: 13,
        }}
      >
        <Text style={[styles.h4, { color: colors.primary }]}>Bulgary</Text>
      </View>
      <View
        style={{
          height: 175,
          backgroundColor: colors.grayBgColor,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          borderBottomLeftRadius: 13,
          borderBottomRightRadius: 13,
          paddingRight: 22,
        }}
      >
        <Text style={[styles.h4, { transform: "rotate(-90deg)" }]}>
          Arrests
        </Text>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            borderRadius: 13,
            paddingTop: 8,
          }}
        >
          <ReactPDFChart>
            <LineChart data={data} height={150} width={500}>
              <XAxis
                tickLine={false}
                dataKey="year"
                padding={{ right: 32 }}
                tick={{ fill: colors.secondText, fontSize: 9, fontFamily: "Poppins" }}
              />
              <YAxis
                tickLine={false}
                color={colors.axis}
                tickCount={5}
                interval={0}
                padding={{ top: 16 }}
                tick={{ fill: colors.secondText, fontSize: 9, fontFamily: "Poppins" }}
              />
              <CartesianGrid stroke={colors.axis} vertical={false} />
              <Line
                dataKey="arrests"
                stroke={colors.primary}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ReactPDFChart>
        </View>
      </View>
    </View>
  );
}

export default CrimeChart;
