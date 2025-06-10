import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function Perfil() {
  const stats = [
    { label: 'Livros Lidos', value: '24' },
    { label: 'Dias de Leitura', value: '156' },
    { label: 'Páginas Lidas', value: '3.2k' },
  ];

  const readingGoals = [
    { title: 'Meta Diária', progress: 0.75, target: '30 min' },
    { title: 'Livros do Mês', progress: 0.4, target: '2/5' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Image 
            source={{ uri: 'https://siga.cps.sp.gov.br/image/FN6JK32F29WRZDJQV4LM8F3MEUVME2.TMB.PNG' }} 
            style={styles.avatar}
          />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Henrique Costa</Text>
            <Text style={styles.userEmail}>henrique.costa@email.com</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Editar Perfil</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Estatísticas */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Suas Estatísticas</Text>
          <View style={styles.statsContainer}>
            {stats.map((stat, index) => (
              <View key={index} style={styles.statCard}>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Metas de Leitura */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Metas de Leitura</Text>
          {readingGoals.map((goal, index) => (
            <View key={index} style={styles.goalCard}>
              <View style={styles.goalHeader}>
                <Text style={styles.goalTitle}>{goal.title}</Text>
                <Text style={styles.goalTarget}>{goal.target}</Text>
              </View>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${goal.progress * 100}%` }]} />
              </View>
            </View>
          ))}
        </View>

        {/* Configurações */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Configurações</Text>
          <TouchableOpacity style={styles.option}>
            <MaterialIcons name="notifications" size={24} color="#666" />
            <Text style={styles.optionText}>Notificações</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <MaterialIcons name="visibility" size={24} color="#666" />
            <Text style={styles.optionText}>Modo Escuro</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <MaterialIcons name="help" size={24} color="#666" />
            <Text style={styles.optionText}>Ajuda</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
    alignSelf: 'flex-start',
  },
  editButtonText: {
    color: '#333',
    fontSize: 12,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 10,
    width: '30%',
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  goalCard: {
    marginBottom: 15,
  },
  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  goalTitle: {
    fontWeight: '500',
  },
  goalTarget: {
    color: '#666',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#e0e0e0',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#6200ee',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  optionText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
  },
});