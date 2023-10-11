import React from "react";
import {
  Page,
  Text,
  View,
  Document as PDFDocument,
  Image,
} from "@react-pdf/renderer";

import styles from "./styles";

import Header from "./header";
import Divider from "./divider";
import CrimeChart from "./crimeChart";
import Footer from "./footer";
import Content from "./content";

function Document() {
  return (
    <PDFDocument>
      <Page size="A4" style={styles.page}>
        <Header />
        <Divider />
        <Content />
        <View style={styles.crimeTitle}>
          <Image src="icons/crime.png" style={{ width: 16 }} />
          <Text style={[styles.h3, { marginLeft: 4, marginRight: 8 }]}>Crime</Text>
          <Divider />
        </View>
        <CrimeChart />
        <Footer />
      </Page>
    </PDFDocument>
  );
}

export default Document;
