import React from 'react';
import { Text, ScrollView, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const Importancia = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Ionicons name="menu" size={24} color="white" style={{ marginLeft: 15 }} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../assets/Fundo.png')}
        style={StyleSheet.absoluteFillObject}
      />      
      <Text style={styles.titulo}>WinkOcean</Text>
      <Text style={styles.subtitulo}>Mostrando a importância dos Oceanos</Text>
      <Text style={styles.text}>
        Os oceanos desempenham um papel vital na manutenção da vida na Terra, funcionando uma ampla gama de processos ambientais e biológicos que são essenciais para a sobrevivência de inúmeras formas de vida. Entre suas contribuições mais significativas, destacam-se a produção de oxigênio, a regulação do clima e a sustento de milhões de espécies.
      </Text>
      <Text style={styles.sectiontitulo}>Produção de Oxigênio</Text>
      <Text style={styles.text}>
        Os oceanos são responsáveis por cerca de 50% do oxigênio produzido no planeta, graças à atividade de organismos marinhos microscopicos, como o fitoplâncton. Esses organismos microscópicos absorvem dióxido de carbono, que através da fotossíntese, produzem oxigênio e liberam de volta na atmosfera. Este processo não só é crucial para a manutenção da vida marinha, mas também é fundamental para a vida terrestre, incluindo a humana.
      </Text>
      <Text style={styles.sectiontitulo}>Regulação do Clima</Text>
      <Text style={styles.text}>
        Os oceanos têm um papel central na regulação do clima global. Eles absorvem grandes quantidades de calor do sol, ajudando a manter a temperatura da Terra estável. A circulação das correntes oceânicas redistribui o calor ao redor do globo, influenciando padrões climáticos e meteorológicos. Por exemplo, correntes como a Corrente do Golfo transportam água quente do Golfo do México até o Norte da Europa, influenciando o clima de regiões como a Noruega e o Reino Unido. Sem os oceanos, a variação de temperatura entre diferentes regiões do planeta seria muito mais extrema, o que poderia resultar em climas mais severos e desastres naturais.
      </Text>
      <Text style={styles.sectiontitulo}>Sustento de Milhões de Espécies</Text>
      <Text style={styles.text}>
        A biodiversidade dos oceanos é impressionante, com milhões de espécies que habitam desde as águas superficiais até as profundezas do oceano. Esse ecossistema marinho fornece alimentos, abrigo e áreas de reprodução para uma vasta gama de organismos, desde o pequeno plâncton até grandes mamíferos marinhos, como as baleias. Os recifes de corais, por exemplo, abrigam uma enorme diversidade de espécies marinhas, apesar de cobrirem menos de 1% da superfície do oceano. Além disso, os oceanos são uma fonte crucial de proteína para a população humana, com a pesca e outras atividades relacionadas dependentes diretamente dos recursos marinhos.
      </Text>
      <Text style={styles.sectiontitulo}>Importância Econômica e Social</Text>
      <Text style={styles.text}>
        Além dos benefícios ecológicos, os oceanos são vitais para a economia e o bem-estar social. Milhões de pessoas dependem da pesca e da aquicultura como fonte de alimento e renda. Os oceanos também são rotas comerciais críticas, com cerca de 90% do comércio mundial sendo transportado por via marítima. O turismo costeiro e marítimo é uma outra fonte significativa de renda para muitas regiões. Portanto, a conservação dos oceanos é essencial não apenas para a biodiversidade, mas também para a economia de muitos países.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    resizeMode: 'cover',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 30
  },
  subtitulo: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    marginLeft: 20,
    fontSize: 16,
    color: '#fff',
    marginBottom: 15,
    lineHeight: 24,
  },
  sectiontitulo: {
    marginLeft: 20,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    marginTop: 20,
  },
  Image:{
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    opacity: 0.8,
  }
});

export default Importancia;
