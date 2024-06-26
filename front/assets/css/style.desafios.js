import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    backgroundColor: "#B0E6F6",
    alignItems: "center",
    height: 60,
    borderBottomColor: "#000",
    borderWidth: 1,
    paddingTop: 20,
  },
  text: {
    fontSize: 20,
  },
  container_conteudo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container_conteudo_titulo: {
    width: "70%",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: 40,
    // paddingLeft: 20,
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  divEstilo1: {
    width: "70%",
    backgroundColor: "red",
    marginTop: "5%",
    borderRadius: 20,
    padding: 20,
    marginBottom: 10,
  },
  divEstilo2: {
    width: "70%",
    backgroundColor: "#003d4f",
    marginTop: "5%",
    borderRadius: 20,
    padding: 20,
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    width: 200,
  },
  btn: {
    backgroundColor: "#000",
    textAlign: "center",
    borderRadius: 5,
    borderRadius: 20,
    paddingVertical: 5,
    marginBottom: 10,
    width: 90,
    height: 25,
    color: "white",
    fontSize: 10,
  },
  btn2: {
    backgroundColor: "#fff",
    textAlign: "center",
    borderRadius: 5,
    borderRadius: 20,
    paddingVertical: 5,
    marginBottom: 10,
    width: 90,
    height: 25,
    color: "#000",
    fontSize: 10,
  },
});
