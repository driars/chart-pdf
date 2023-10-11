import React from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import Document from "pdf-components/document";
import "./home.css";
import { useArrests } from "hooks/useArrests";
import ErrorScreen from "./error";
import LoadingScreen from "./loading";

export const Home = () => {

  const { isLoading, error, data } = useArrests();

  if (isLoading) return <LoadingScreen />;

  if (error) return <ErrorScreen />;

  return (
    <div className="App">
      <div className="pdf-viewer-container">
        <PDFViewer className="pdf-viewer">
          <Document data={data!} />
        </PDFViewer>
      </div>
      <div className="button-container">
        <PDFDownloadLink
          document={<Document data={data!} />}
          fileName="chart.pdf"
          style={{ textDecoration: "none" }}
        >
          {({ loading }) =>
            loading ? (
              "Loading document..."
            ) : (
              <div className="print-button">
                <img src="icons/printer.png" alt="Print SVG" width={24} height={24}></img>
                <span>Print</span>
              </div>
            )
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
};
