import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  tipoDado: number;
  setTipoDado: (tipo: number) => void;
  quantidade: number;
  setQuantidade: (qtd: number) => void;
};

export default function DiceSelect({
  tipoDado,
  setTipoDado,
  quantidade,
  setQuantidade,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>TIPO DE DADO</Text>
      <View style={styles.row}>
        {[4, 6, 8, 10, 12, 20].map((tipo) => (
          <TouchableOpacity
            key={tipo}
            onPress={() => setTipoDado(tipo)}
            style={[
              styles.tipoBtn,
              tipoDado === tipo && styles.selected,
            ]}
          >
            <Text style={styles.tipoTexto}>D{tipo}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>QUANTIDADE</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => setQuantidade(Math.max(1, quantidade - 1))}>
          <Text style={styles.control}>-</Text>
        </TouchableOpacity>

        <Text style={styles.quantidade}>{quantidade}</Text>

        <TouchableOpacity onPress={() => setQuantidade(quantidade + 1)}>
          <Text style={styles.control}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: 'center',
  },
  label: {
    color: '#777',
    marginBottom: 10,
    letterSpacing: 2,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  tipoBtn: {
    backgroundColor: '#111',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  selected: {
    backgroundColor: '#3A2A5A',
  },
  tipoTexto: {
    color: '#B983FF',
    fontWeight: 'bold',
  },
  quantidade: {
    color: '#B983FF',
    fontSize: 22,
    minWidth: 40,
    textAlign: 'center',
  },
  control: {
    fontSize: 28,
    color: '#B983FF',
    paddingHorizontal: 20,
  },
});