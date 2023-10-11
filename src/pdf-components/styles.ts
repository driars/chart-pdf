import { StyleSheet, Font } from "@react-pdf/renderer";

// import fonts
import PoppinsRegular from "../assets/fonts/Poppins-Regular.ttf";
import PoppinsBold from "../assets/fonts/Poppins-Bold.ttf";
import { colors } from "./colors";

Font.register({
  family: "Poppins",
  fonts: [
    {
      src: PoppinsRegular,
    },
    {
      src: PoppinsBold,
      fontStyle: "bold",
    },
  ],
});

// Create styles
export default StyleSheet.create({
  page: {
    backgroundColor: "white",
    padding: 16,
  },
  header: {
    marginBottom: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footer: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
  },
  crimeTitle: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textBold: {
    fontStyle: "bold",
  },
  h3: {
    color: colors.text,
    fontFamily: "Poppins",
    fontSize: 10,
  },
  h4: {
    color: colors.text,
    fontSize: 9,
    fontFamily: "Poppins",
  },
});
