import { View, Text, StyleSheet } from 'react-native';

export default function DiceView() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>TOTAL DO LANÇAMENTO</Text>

      <Text style={styles.resultado}>12</Text>

      <View style={styles.dadosContainer}>
        <View style={styles.dado}>
          <Text style={styles.dadoTexto}>6</Text>
        </View>

        <View style={styles.dado}>
          <Text style={styles.dadoTexto}>6</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  label: {
    color: '#777',
    letterSpacing: 3,
    marginBottom: 10,
  },
  resultado: {
    fontSize: 80,
    color: '#E0E0E0',
    marginBottom: 20,
  },
  dadosContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  dado: {
    width: 90,
    height: 90,
    borderRadius: 20,
    backgroundColor: '#1A1A2E',
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#B983FF',
    shadowOpacity: 0.6,
    shadowRadius: 12,
  },
  dadoTexto: {
    fontSize: 30,
    color: '#B983FF',
  },
});