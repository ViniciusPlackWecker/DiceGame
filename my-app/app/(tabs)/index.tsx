import { View, StyleSheet } from 'react-native';

import Header from '@/components/header';
import DiceView from '@/components/dice-view';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Header />
        <DiceView />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#000',
  padding: 20,
},
inner: {
  flex: 1,
  borderRadius: 30,
  backgroundColor: '#05050A',
  padding: 20,
}
});