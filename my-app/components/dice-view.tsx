import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useRef, useState } from 'react';

type Props = {
  tipoDado: number;
  quantidade: number;
};

export default function DiceView({ tipoDado, quantidade }: Props) {
  const anim = useRef(new Animated.Value(0)).current;
  const [dados, setDados] = useState(Array(quantidade).fill(1));
  const intervalRef = useRef<number | null>(null);

  function rollDice() {
    anim.setValue(0);

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDados(Array(quantidade).fill(0).map(
        () => Math.floor(Math.random() * tipoDado) + 1
      ));
    }, 80);

    Animated.sequence([
      Animated.timing(anim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(anim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start(() => {
      if (intervalRef.current) clearInterval(intervalRef.current);

      setDados(Array(quantidade).fill(0).map(
        () => Math.floor(Math.random() * tipoDado) + 1
      ));
    });
  }

  const total = dados.reduce((acc, val) => acc + val, 0);

  const rotate = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const scale = anim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.3, 1],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>TOTAL DO LANÇAMENTO</Text>

      <Text style={styles.resultado}>{total}</Text>

      <View style={styles.dadosContainer}>
        {dados.map((valor, i) => (
          <TouchableOpacity key={i} onPress={rollDice}>
            <Animated.View
              style={[
                styles.dado,
                {
                  transform: [{ rotate }, { scale }],
                },
              ]}
            >
              <Text style={styles.dadoTexto}>{dados[i]}</Text>
            </Animated.View>
          </TouchableOpacity>
        ))}
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
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
  dado: {
    width: 80,
    height: 80,
    borderRadius: 16,
    backgroundColor: '#1A1A2E',
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#B983FF',
    shadowOpacity: 0.6,
    shadowRadius: 12,
  },
  dadoTexto: {
    fontSize: 26,
    color: '#B983FF',
  },
});
