import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    paddingLeft: 35,
    paddingRight: 35,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingBottom: 20,
  },

  logoHead: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {},
  logoText: {
    fontSize: 16,
    fontWeight: 600,
  },
  rightHead: {
    justifyContent: "flex-end",
  },
  headRightText1: {
    fontSize: 10,
    color: "#4F4F4F",
  },
  headRightText2: {
    display: "flex",
    justifyContent: "flex-end",
    fontSize: 10,
    color: "#4F4F4F",
  },
});
