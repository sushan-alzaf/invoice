"use client";
import {
  Document,
  // Image,
  Page,
  PDFViewer,
  Text,
  View,
} from "@react-pdf/renderer";
import React from "react";
import { styles } from "./style";
export default function Invoice() {
  // const logoBase64 =
  //   "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI4IDI4IiBmaWxsPSJub25lIj48ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj48cGF0aCBkPSJNMTcuODg5IDguMTc5N2MxLjE1MS0wLjY4NCAyLjUwNC0xLjEwNiA0LTEuMTc5OVYwYy0yLjU5OCAwLTUuMTg3IDAuODIxLTMuNzY0IDEuODAyLTIuMTcxIDEuNDI0LTMuNzQ5IDMuMzYxLTQuODUzIDUuNjI4QzEwLjIzMiAxMi41MjYgMTEuMjIgMTUuODAxIDEyLjU4MyAxOC4zNTJDMTMuOTQ1IDIwLjkwNiAxNi41MjYgMjIuNzI0IDE5LjUgMjMuNTU2YzIuOTc1IDAuODMxIDYuMTg3IDAuNjYxIDguNzYxLTAuNTA2QzI5Ljg0MyAyMi45NDIgMzIuMjggMjAuNzk2IDMzLjgxOSAxNy45MzNDMzUuMzU2IDE1LjA3IDM1Ljc4MSAxMS45NjYgMzUuMDk1IDguOTg3QzM0LjQxIDUuOTAxIDMyLjY0NyAzLjA4MiAyOS43NzQgMS41MzVDMjYuOTAyIDAuMDAzMTI2IDIzLjc5NiAwLjQyNTQyMiAyMC43MTcgMS4xMDk1QzE3LjYzOCAxLjc5MzUgMTQuODIyIDMuNTUzMiAxMi45MzMgNS43NDY3QzExLjA0NSA3Ljk0MDIgOS43NzI3IDEwLjU4MSA5LjQ3NzMgMTMuNTU4QzkuMTgxNiAxNi41MzYgMTAuMDY1IDE5LjUwNiAxMS45ODUgMjEuNjA1QzEzLjkwNSA3LjEwNSA1LjAwNSA4LjU1OCAzLjcwOSAxMC4xNDVDMi40MTMgMTEuNzM0IDEuODc0IDEzLjgzIDEuNzcgMTYuMDEzQzEuNjY1IDE4LjE5NiAyLjAwMiAyMC40NTQgMi43NTYgMjIuNDE2QzMuNTEgMjQuMzc4IDQuNjY2IDI2LjAxIDYuMTkzIDI3LjE0MkM3LjcyIDI4LjI3NCA5LjYyIDI4Ljg5IDExLjU0IDI4Ljg5YzEuOTIgMCAzLjgyLTAuNjE3IDUuMzQ3LTEuNzQ2QzE4LjQxNCAyNi43NjMgMTkuNTY5IDI1LjEzMSAyMC4zMjMgMjMuMTdDMTMuMzA5IDIxLjIxIDE0LjA5MSAyMC42NzQgMTMuNDkxIDIwLjAwMkMxMi45IDkuMzI1IDExLjEwNCA4LjMzMyA5LjE4NSAxLjQyOEM3LjI2NSAtNS40NzYgNS4zODggNS4xMDEgMy43NjMgNi40ODVDMi4xMzkgNy44NjkgMC43NzYzIDkuNzMyIDAuMDUyIDEwLjk4OEwwIDE0SDciIGZpbGw9IiMyMjcwRTQiLz48cGF0aCBkPSJNNyAwQzcgMC45MTkgNi44MTkgMS44MyA2LjQ2NyAyLjY3OUM2LjExNSAzLjUyOCA1LjYwMCA0LjMgNC45NSA0Ljk1QzQuMzAwIDUuNiAzLjUyOCA2LjExIDIgNi40NjdDMS44MyA2LjgyIDAuOTIgNyAwIDdWMTRDOS44IDExLjYgMTEuMiA5LjggMTIuOSAwWiIgZmlsbD0iIzIyNzBFNCIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAwIj48cmVjdCB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9IndoaXRlIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+";
  const InvoicePDF = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.logoHead}>
            {/* <Image src={logoBase64} style={styles.logo} /> */}
            <Text style={styles.logoText}>Alzaf ISP </Text>
          </View>
          <View style={styles.rightHead}>
            <Text style={styles.headRightText1}>
              Address: #4613, Dada Tower(2nd Floor)
            </Text>
            <Text style={styles.headRightText2}>Phone: 09613 815 815</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
  return (
    <div>
      <div className="w-full h-[680px]">
        <PDFViewer width="100%" height="100%">
          <InvoicePDF />
        </PDFViewer>
      </div>
    </div>
  );
}
