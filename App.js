import React, {
  useEffect,
  useState,
} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import ColorPicker from './color-picker';

export default function App() {
  const [colors, setColors] = useState([
    'hsla(2, 87%, 75%, 1)',
    'hsla(29, 84%, 66%, 1)',
    'hsla(207, 26%, 48%, 1)',
    'hsla(87, 17%, 53%, 1)',
    'hsla(251, 18%, 70%, 1)',
    'hsla(203, 35%, 79%, 1)',
    'hsla(180, 2%, 29%, 1)',
  ]);

  const selectColor = () => {}

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollView}>

          <Text style={styles.text}>Page content</Text>
          <Text style={styles.text}>Page content</Text>
          <Text style={styles.text}>Page content</Text>
          <Text style={styles.text}>Page content</Text>
          <Text style={styles.text}>Page content</Text>
          <Text style={styles.text}>Page content</Text>
          <Text style={styles.text}>Page content</Text>
          <Text style={styles.text}>Page content</Text>
          <Text style={styles.text}>Page content</Text>
          <Text style={styles.text}>Page content</Text>
          <Text style={styles.text}>Page content</Text>
          <Text style={styles.text}>Page content</Text>
          <Text style={styles.text}>Page content</Text>
          <Text style={styles.text}>Page content</Text>
          <Text style={styles.text}>Page content</Text>
          <Text style={styles.text}>Page content</Text>
          <Text style={styles.text}>Page content</Text>
          <Text style={styles.text}>Page content</Text>
          <Text style={styles.text}>Page content</Text>
          <Text style={styles.text}>Page content</Text>
          <Text style={styles.text}>Page content</Text>
          <Text style={styles.text}>Page content</Text>
          <Text style={styles.text}>Page content</Text>
          <Text style={styles.text}>Page content</Text>
          <Text style={styles.text}>Page content</Text>
          <Text style={styles.text}>Page content</Text>
          <Text style={styles.text}>Page content</Text>
          <Text style={styles.text}>Page content</Text>
          <Text style={styles.text}>Page content</Text>
          <Text style={styles.text}>Page content</Text>

        </ScrollView>
      </SafeAreaView>

      <ColorPicker colors={colors}
                   selectColor={selectColor}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    width: '100%',
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  text: {
    alignSelf: 'center',
    margin: 50,
  }
});
