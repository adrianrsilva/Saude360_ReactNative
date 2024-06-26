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
    flex: -1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: 20,
    paddingLeft: 20,
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  container_conteudo_titulo_card1: {
    flex: -1,
    width: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFA500",
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  container_conteudo_titulo_card2: {
    flex: -1,
    width: 80,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00ff00",
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    fontSize: 10,
  },
  container_conteudo_titulo_card3: {
    flex: -1,
    width: 80,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b0e6f6",
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    fontSize: 12,
  },
  container_card: {
    flex: -1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    marginRight: 20,
  },
  text_subtitulo: {
    fontSize: 10,
  },
  img_fundo: {
    flex: 1,
    margin: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
});
