import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

const width = Dimensions.get('window').width;
const CARD_WIDTH = width * 0.35;

const sessoes = [
  {
    id: 's1',
    titulo: 'Continuar Lendo',
    livros: [
      {
        id: '1',
        titulo: 'Física Moderna',
        autor: 'Stephen Hawking',
        capa: 'https://m.media-amazon.com/images/I/813PccutuYL._AC_UF1000,1000_QL80_.jpg',
        descricao: 'Uma introdução abrangente aos conceitos da física moderna, desde a relatividade até a mecânica quântica.',
        paginas: 320,
        editora: 'Editora Científica',
        ano: 2018,
        rating: 4.5
      },
      {
        id: '2',
        titulo: 'Mecânica Quântica',
        autor: 'Richard Feynman',
        capa: 'https://m.media-amazon.com/images/I/813C31nRQaL._AC_UF1000,1000_QL80_.jpg',
        descricao: 'As famosas aulas de Feynman sobre mecânica quântica, explicando conceitos complexos de forma acessível.',
        paginas: 280,
        editora: 'Editora Física',
        ano: 1965,
        rating: 4.8
      },
    ],
  },
  {
    id: 's2',
    titulo: 'Recomendados para Você',
    livros: [
      {
        id: '3',
        titulo: 'Inteligência Artificial',
        autor: 'Stuart Russell',
        capa: 'https://img.skoob.com.br/Y3UwjmL30Wui-TpHlgeQNjjv2II=/600x0/center/top/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/36187/INTELIGENCIA_ARTIFICIAL__1247420076B.jpg',
        descricao: 'O livro definitivo sobre IA, cobrindo desde os fundamentos até as mais recentes inovações no campo.',
        paginas: 450,
        editora: 'Editora Tech',
        ano: 2020,
        rating: 4.7
      },
      {
        id: '4',
        titulo: 'Data Science do Zero',
        autor: 'Joel Grus',
        capa: 'https://m.media-amazon.com/images/I/61A4bRmigsS._AC_UF1000,1000_QL80_.jpg',
        descricao: 'Aprenda data science construindo tudo do zero, entendendo os fundamentos por trás das bibliotecas populares.',
        paginas: 380,
        editora: 'Editora Dados',
        ano: 2019,
        rating: 4.3
      },
    ],
  },
];

export default function TelaInicial({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container}>
        {sessoes.map((sessao) => (
          <View key={sessao.id} style={styles.section}>
            <Text style={styles.sectionTitle}>{sessao.titulo}</Text>
            <FlatList
              data={sessao.livros}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('Livro', { livro: item })}>
                  <View style={styles.card}>
                    <Image source={{ uri: item.capa }} style={styles.image} />
                    <Text style={styles.title}>{item.titulo}</Text>
                    <Text style={styles.author}>{item.autor}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  container: { paddingTop: 10, paddingHorizontal: 10 },
  section: { marginBottom: 30 },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginBottom: 10 },
  card: {
    width: CARD_WIDTH,
    marginRight: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 13,
    padding: 5,
  },
  author: {
    fontSize: 11,
    color: '#666',
    paddingHorizontal: 5,
    paddingBottom: 10,
  },
});