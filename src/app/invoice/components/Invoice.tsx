"use client";

import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  PDFViewer,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    fontFamily: "Helvetica",
  },
  container: {
    width: "361px",
    height: "512px",
    margin: "auto",
    position: "relative",
  },
  header: {
    textAlign: "center",
    paddingTop: "16px",
  },
  companyName: {
    color: "#171717",
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "3px",
  },
  contactInfo: {
    color: "#4F4F4F",
    fontSize: "12px",
    marginBottom: "3px",
  },
  divider: {
    borderBottom: "1px dashed #D1D1D1",
    width: "339px",
    marginTop: "21px",
    marginBottom: "19px",
  },
  sectionTitle: {
    color: "#171717",
    fontSize: "12px",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "center",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: "4px",
    marginBottom: "8px",
  },
  infoLabel: {
    color: "#454545",
    fontSize: "12px",
  },
  infoValue: {
    color: "#454545",
    fontSize: "12px",
    fontWeight: "medium",
  },
  infoValueTow: {
    color: "#171717",
    fontSize: "12px",
    fontWeight: "medium",
  },
  packageInfo: {
    marginBottom: "8px",
    color: "#494848",
    fontSize: "12px",
    textAlign: "center",
  },
  thankYou: {
    color: "#000",
    fontSize: "14px",
    fontWeight: "extrabold",
    marginBottom: "13px",
    textAlign: "center",
    marginTop: "42px",
  },
  portalInfo: {
    flexDirection: "row",
    justifyContent: "center",
    gap: "4px",
    marginBottom: "8px",
    color: "#000",
    fontSize: "11px",
    fontWeight: "medium",
  },
  barcodeContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 21,
  },
  printInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: "9px",
    paddingTop: "3px",
    paddingHorizontal: "5px",
  },
  logo: {
    position: "absolute",
    top: "244.1px",
    right: "115.76px",
    width: "120px",
    height: "120px",
  },
  barcode: {
    width: "321px",
    height: "46px",
  },
});

// Create Document Component
const Invoice = ({ data }) => {
  const currentDate = new Date().toLocaleDateString("en-GB");
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const logoUrl = data?.images?.logo || "https://i.ibb.co/4R0V0tbB/Logo.png";
  const barcodeUrl =
    data?.images?.barcode || "https://i.ibb.co/k6JhsCGZ/image-1102.png";

  return (
    <Document>
      <Page size={[361, 512]} style={styles.page}>
        <View style={styles.container}>
          <View style={styles.logo}>
            {/* Note: You'll need to provide the actual path to your logo */}
            <Image src={logoUrl || "/placeholder.svg"} />
          </View>

          <View style={styles.header}>
            <Text style={styles.companyName}>ALZAF ISP</Text>
            <Text style={styles.contactInfo}>Phone: +880913815815</Text>
            <Text style={styles.contactInfo}>Support: info@alzafisp.com</Text>
          </View>

          <View style={styles.divider} />

          <View>
            <Text style={styles.sectionTitle}>Payment Receipt:</Text>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Receipt No: </Text>
              <Text style={styles.infoValueTow}>
                {data?.receipt_no || "N/A"}
              </Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Name:</Text>
              <Text style={styles.infoValue}>
                {data?.customer?.name ?? "N/A"}
              </Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Address:</Text>
              <Text style={styles.infoValue}>
                {data?.customer?.present_address ?? "N/A"}
              </Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>User Login ID:</Text>
              <Text style={styles.infoValueTow}>
                {data?.customer?.username || "N/A"}
              </Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Client ID NO:</Text>
              <Text style={styles.infoValueTow}>
                {data?.customer?.client_no || "N/A"}
              </Text>
            </View>

            <View style={styles.packageInfo}>
              <Text style={styles.infoLabel}>Internet Package:</Text>
              <Text style={styles.infoValue}>
                {data?.package?.title} - {data?.package?.price_with_vat} TK
              </Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Expiry Date:</Text>
              <Text style={styles.infoValue}>{data?.expire_date || "N/A"}</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Received Date:</Text>
              <Text style={styles.infoValue}>{data?.created_at || "N/A"}</Text>
            </View>

            <Text style={styles.thankYou}>THANK YOU</Text>

            <View style={styles.portalInfo}>
              <Text>Visit self service portal:</Text>
              <Text>https://alzafisp.com</Text>
            </View>

            <View style={styles.barcodeContainer}>
              {/* Note: You'll need to provide the actual path to your barcode */}
              <Image
                style={styles.barcode}
                src={barcodeUrl || "/icons/barcode.png"}
              />
            </View>

            <View style={styles.printInfo}>
              <Text>Print Date: {currentDate}</Text>
              <Text>Time: {currentTime}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

// Component to display the PDF
export const InvoiceViewer = ({ data }) => (
  <PDFViewer width="100%" height="600px">
    <Invoice data={data} />
  </PDFViewer>
);

export default Invoice;
