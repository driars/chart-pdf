import React from "react";
import { Svg, Defs, LinearGradient, Stop, Rect } from "@react-pdf/renderer";

function Divider() {
  return (
    <Svg viewBox="0 0 600 2" height={2}>
      <Defs>
        <LinearGradient id="gradient" x1="0" x2="1" y1="0" y2="0">
          <Stop offset="0%" stopColor="#005DFF" />
          <Stop offset="44%" stopColor="#00A3FF" />
          <Stop offset="100%" stopColor="#21DDFF" />
        </LinearGradient>
      </Defs>

      <Rect fill="url('#gradient')" x="0" y="0" width="600" height="2" />
    </Svg>
  );
}

export default Divider;
