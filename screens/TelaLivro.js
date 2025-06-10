import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TelaLivro = ({ route, navigation }) => {
  const { livro } = route.params;

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        
        <View style={styles.bookHeader}>
          <Image source={{ uri: livro.capa }} style={styles.bookCover} />
          <View style={styles.bookInfo}>
            <Text style={styles.bookTitle}>{livro.titulo}</Text>
            <Text style={styles.bookAuthor}>{livro.autor}</Text>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={16} color="#FFD700" />
              <Text style={styles.ratingText}>{livro.rating}/5.0</Text>
            </View>
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Editora:</Text>
            <Text style={styles.detailValue}>{livro.editora}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Ano:</Text>
            <Text style={styles.detailValue}>{livro.ano}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Páginas:</Text>
            <Text style={styles.detailValue}>{livro.paginas}</Text>
          </View>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.sectionTitle}>Descrição</Text>
          <Text style={styles.descriptionText}>{livro.descricao}</Text>
        </View>

        <TouchableOpacity style={styles.readButton}>
          <Text style={styles.readButtonText}>Ler Agora</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  container: { padding: 20 },
  backButton: {
    padding: 10,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  bookHeader: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  bookCover: {
    width: 120,
    height: 180,
    borderRadius: 5,
    marginRight: 20,
  },
  bookInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  bookTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bookAuthor: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#666',
  },
  detailsContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 30,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
    fontWeight: 'bold',
  },
  detailValue: {
    fontSize: 14,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  descriptionContainer: {
    marginBottom: 30,
  },
  descriptionText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#444',
  },
  readButton: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  readButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TelaLivro;