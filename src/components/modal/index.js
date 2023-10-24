import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";

export function ModalPass({ password, handleClose }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Senha Gerada</Text>
        <Pressable style={styles.innerPass}>
          <Text style={styles.text}>{password}</Text>
        </Pressable>
        <View style={styles.buttonArea}>
          <TouchableOpacity style={[styles.button, styles.buttonSave]}>
            <Text style={styles.buttonSaveText}>Salvar Senha</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleClose}>
            <Text style={styles.buttonText}> Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(24, 24, 24, 0.6)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "#FFF",
    width: "85%",
    paddingTop: 24,
    paddingBottom: 24,
    alignItems: "center",
    alignContent: "center",
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 24,
  },
  innerPass: {
    backgroundColor: "#0e0e0e",
    width: "90%",
    padding: 14,
    borderRadius: 8,
  },
  text: {
    color: "#FFF",
    textAlign: "center",
  },
  buttonArea: {
    color: "#FFF",
    flexDirection: "row",
    width: "90%",
    marginTop: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
    padding: 8,
  },
  buttonSave: {
    backgroundColor: "#392DE9",
    borderRadius: 99,
  },
  buttonSaveText: {
    color: "white",
    fontWeight: "bold",
  },

  buttonText: {},
});
