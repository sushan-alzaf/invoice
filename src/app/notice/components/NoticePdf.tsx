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
    width: "595px",
    height: "712px",
    margin: "auto",
    position: "relative",
    padding: "35px",
  },
  header: {
    textAlign: "left",
  },
  companyName: {
    color: "#3D3D3D",
    fontSize: "10px",
    fontWeight: "bold",
    marginBottom: "3px",
    lineHeight: "20px",
  },
  contactInfo: {
    color: "#4F4F4F",
    fontSize: "10px",
    marginBottom: "3px",
    lineHeight: "20px",
  },
  contactInfoOne: {
    color: "#4F4F4F",
    fontSize: "10px",
    fontWeight: "bold",
    marginBottom: "3px",
    lineHeight: "20px",
  },
  ContactInfoEqual: {
    display: "flex",
    flexDirection: "row",
    gap: "5px",
  },

  barcodeContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 21,
  },

  logo: {
    position: "absolute",
    bottom: "154.1px",
    left: "100.76px",
    width: "120px",
    height: "120px",
  },

  mainSection: {
    marginTop: "30px",
  },
  listContainer: {},
  listItem: {
    display: "flex",
    flexDirection: "row",
    lineHeight: "20px",
    fontSize: "10px",
    color: "#454545",
  },
  bulletPoint: {},
  listItemText: {},
  footerContainer: {
    marginTop: "20px",
  },
  signature: {
    marginTop: "20px",
  },
  signatureText: {
    fontSize: "10px",
    color: "#4F4F4F",
    lineHeight: "20px",
  },
  signatureName: {
    fontSize: "10px",
    fontWeight: "bold",
    color: "#4F4F4F",
    marginTop: "10px",
    marginBottom: "3px",
    lineHeight: "20px",
  },
});

// Create Document Component
const NoticePdf = ({ data }) => {
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
      <Page size={[595, 712]} style={styles.page}>
        <View style={styles.container}>
          <View style={styles.logo}>
            {/* Note: You'll need to provide the actual path to your logo */}
            <Image src={logoUrl || "/placeholder.svg"} />
          </View>

          <View style={styles.header}>
            <Text style={styles.companyName}>ALZAF ISP</Text>
            <Text style={styles.contactInfo}>Technical Support Department</Text>
            <View style={styles.ContactInfoEqual}>
              <Text style={styles.contactInfoOne}>Address:</Text>
              <Text style={styles.contactInfo}>
                #4613, Dada Tower(2nd Floor)
              </Text>
            </View>
            <View style={styles.ContactInfoEqual}>
              <Text style={styles.contactInfoOne}>Phone:</Text>
              <Text style={styles.contactInfo}>
                +09613 815 815 | [Email Address] | [Website]
              </Text>
            </View>
            <View style={styles.ContactInfoEqual}>
              <Text style={styles.contactInfoOne}>Date:</Text>
              <Text style={styles.contactInfo}>{currentDate}</Text>
            </View>
            <View style={styles.ContactInfoEqual}>
              <Text style={styles.contactInfoOne}>Subject:</Text>
              <Text style={styles.contactInfo}>
                Line Change Notice – Service Upgrade Notification
              </Text>
            </View>
          </View>
          <View style={styles.mainSection}>
            <Text style={styles.contactInfoOne}>Dear Customer Name,</Text>
            <View>
              <Text style={styles.contactInfo}>
                We would like to inform you that your current service line will
                undergo an upgrade/change as part of our ongoing infrastructure
                improvement initiative.
              </Text>
              <Text style={styles.contactInfo}>Details of Line Change:</Text>
              <View style={styles.ContactInfoEqual}>
                <Text style={styles.contactInfo}>Old Line Type:</Text>
                <Text style={styles.contactInfo}>[e.g., Copper ADSL]</Text>
              </View>
              <View style={styles.ContactInfoEqual}>
                <Text style={styles.contactInfo}>New Line Type:</Text>
                <Text style={styles.contactInfo}>
                  [e.g., Fiber Optic / VDSL / FTTH]
                </Text>
              </View>
              <View style={styles.ContactInfoEqual}>
                <Text style={styles.contactInfo}>Change Date:</Text>
                <Text style={styles.contactInfo}>{currentDate}</Text>
              </View>
              <View style={styles.ContactInfoEqual}>
                <Text style={styles.contactInfo}>Time of Scheduled Work:</Text>
                <Text style={styles.contactInfo}>
                  [Insert Start Time] – [Insert End Time]
                </Text>
              </View>
              <View style={styles.ContactInfoEqual}>
                <Text style={styles.contactInfo}>Expected Downtime:</Text>
                <Text style={styles.contactInfo}>
                  {" "}
                  [Insert Duration] (if any)
                </Text>
              </View>
              <Text style={styles.contactInfo}>
                This upgrade is being carried out to improve your internet
                speed, reliability, and overall experience. The transition will
                be handled by our technical team, and we will ensure minimal
                disruption to your service.
              </Text>
              <Text style={styles.contactInfo}>Important Notes:</Text>
              {/* Bullet point list implementation */}
              <View style={styles.listContainer}>
                <View style={styles.listItem}>
                  <Text style={styles.bulletPoint}>• </Text>
                  <Text style={styles.listItemText}>
                    Your modem/router may need to be reconfigured or replaced.
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.bulletPoint}>• </Text>
                  <Text style={styles.listItemText}>
                    A technician may visit your premises on the scheduled date.
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.bulletPoint}>• </Text>
                  <Text style={styles.listItemText}>
                    Please ensure someone is available for access, if necessary.
                  </Text>
                </View>
              </View>

              <View style={styles.footerContainer}>
                <Text style={styles.contactInfo}>
                  If you have any questions or require assistance before or
                  after the upgrade, please contact our support team at [Phone
                  Number] or [Email Address].
                </Text>
                <Text style={styles.contactInfo}>
                  We appreciate your cooperation and thank you for being a
                  valued customer.
                </Text>
              </View>

              <View style={styles.signature}>
                <Text style={styles.signatureText}>Sincerely,</Text>
                <Text style={styles.signatureName}>Md. Jahid</Text>
                <Text style={styles.signatureText}>
                  Technical Support Manager
                </Text>
                <Text style={styles.signatureText}>Alzaf ISP</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

// Component to display the PDF
export const NoticeViewer = ({ data }) => (
  <PDFViewer width="100%" height="712px">
    <NoticePdf data={data} />
  </PDFViewer>
);

export default NoticePdf;
