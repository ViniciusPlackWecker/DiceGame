import { View, StyleSheet, SafeAreaView } from 'react-native';
import { useState } from 'react';

import Header from '@/components/header';
import DiceView from '@/components/dice-view';
import DiceSelect from '@/components/dice-select';

export default function HomeScreen() {
  const [dieType, setDieType] = useState(6);
  const [quantity, setQuantity] = useState(1);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.inner}>
          <Header />

          <DiceView
            tipoDado={dieType}
            quantidade={quantity}
          />

          <DiceSelect
            tipoDado={dieType}
            setTipoDado={setDieType}
            quantidade={quantity}
            setQuantidade={setQuantity}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#000',
  },

  container: {
    flex: 1,
    padding: 16,

    // 👇 centraliza em telas grandes (tablet/web)
    alignItems: 'center',
    justifyContent: 'center',
  },

  inner: {
    flex: 1,
    width: '100%',

    // 👇 limita largura em telas grandes
    maxWidth: 500,

    borderRadius: 30,
    backgroundColor: '#05050A',
    padding: 20,

    // 👇 evita overflow visual
    overflow: 'hidden',
  },
});