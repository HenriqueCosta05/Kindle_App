import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function Configuracoes() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <Text style={styles.text}>Aqui estarão as opções de configuração do app</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#666',
  },
});