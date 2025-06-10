import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const libraryData = [
  {
    id: '1',
    title: 'Física Moderna',
    author: 'Stephen Hawking',
    cover: 'https://m.media-amazon.com/images/I/813PccutuYL._AC_UF1000,1000_QL80_.jpg',
    progress: 0.65,
    lastRead: '2 dias atrás',
    category: 'Ciência',
  },
  {
    id: '2',
    title: 'Mecânica Quântica',
    author: 'Richard Feynman',
    cover: 'https://m.media-amazon.com/images/I/813C31nRQaL._AC_UF1000,1000_QL80_.jpg',
    progress: 0.3,
    lastRead: '1 semana atrás',
    category: 'Ciência',
  },
  {
    id: '3',
    title: 'Inteligência Artificial',
    author: 'Stuart Russell',
    cover: 'https://img.skoob.com.br/Y3UwjmL30Wui-TpHlgeQNjjv2II=/600x0/center/top/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/36187/INTELIGENCIA_ARTIFICIAL__1247420076B.jpg',
    progress: 0.8,
    lastRead: 'Ontem',
    category: 'Tecnologia',
  },
  {
    id: '4',
    title: 'Data Science do Zero',
    author: 'Joel Grus',
    cover: 'https://m.media-amazon.com/images/I/61A4bRmigsS._AC_UF1000,1000_QL80_.jpg',
    progress: 0.45,
    lastRead: '3 dias atrás',
    category: 'Tecnologia',
  },
];

export default function Biblioteca() {
  const [activeTab, setActiveTab] = useState('lendo');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Minha Biblioteca</Text>
        <TouchableOpacity>
          <Ionicons name="search" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'lendo' && styles.activeTab]}
          onPress={() => setActiveTab('lendo')}
        >
          <Text style={[styles.tabText, activeTab === 'lendo' && styles.activeTabText]}>Lendo</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'salvos' && styles.activeTab]}
          onPress={() => setActiveTab('salvos')}
        >
          <Text style={[styles.tabText, activeTab === 'salvos' && styles.activeTabText]}>Salvos</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'finalizados' && styles.activeTab]}
          onPress={() => setActiveTab('finalizados')}
        >
          <Text style={[styles.tabText, activeTab === 'finalizados' && styles.activeTabText]}>Finalizados</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de Livros */}
      <FlatList
        data={libraryData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.bookCard}>
            <Image source={{ uri: item.cover }} style={styles.bookCover} />
            <View style={styles.bookInfo}>
              <Text style={styles.bookTitle}>{item.title}</Text>
              <Text style={styles.bookAuthor}>{item.author}</Text>
              <Text style={styles.bookCategory}>{item.category}</Text>
              
              <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                  <View style={[styles.progressFill, { width: `${item.progress * 100}%` }]} />
                </View>
                <Text style={styles.progressText}>{Math.round(item.progress * 100)}%</Text>
              </View>
              
              <View style={styles.lastRead}>
                <Ionicons name="time-outline" size={14} color="#666" />
                <Text style={styles.lastReadText}>{item.lastRead}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.moreButton}>
              <Ionicons name="ellipsis-vertical" size={18} color="#666" />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#6200ee',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
  },
  activeTabText: {
    color: '#6200ee',
    fontWeight: '500',
  },
  listContent: {
    padding: 15,
  },
  bookCard: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    overflow: 'hidden',
  },
  bookCover: {
    width: 80,
    height: 120,
  },
  bookInfo: {
    flex: 1,
    padding: 12,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  bookAuthor: {
    fontSize: 13,
    color: '#666',
    marginBottom: 5,
  },
  bookCategory: {
    fontSize: 12,
    color: '#6200ee',
    backgroundColor: '#e6e1f9',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: '#e0e0e0',
    borderRadius: 2,
    marginRight: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#6200ee',
  },
  progressText: {
    fontSize: 12,
    color: '#666',
  },
  lastRead: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lastReadText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 5,
  },
  moreButton: {
    padding: 10,
  },
});