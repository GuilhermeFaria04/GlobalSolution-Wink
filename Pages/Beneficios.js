import React from 'react';
import { Text, ScrollView, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';

const Beneficios = () => {
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <Entypo name="menu" size={24} color="white" style={{ marginLeft: 15 }} />
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
            <Text style={styles.subtitulo}>Benefícios das Práticas Sustentáveis para a Saúde dos Oceanos</Text>
            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16, marginBottom: 15, lineHeight: 24, marginLeft: 10, marginRight: 10 }}>
                As práticas sustentáveis são essenciais para a preservação da saúde dos oceanos e para a manutenção da biodiversidade marinha. Aqui estão alguns benefícios dessas práticas.
            </Text>
            <Text style={styles.sectiontitulo}>Redução do Uso de Plásticos</Text>
            <Text style={styles.text}>
                Utilize Sacolas Reutilizáveis: Em vez de sacolas plásticas descartáveis, opte por sacolas de tecido reutilizáveis ao fazer compras.{"\n"}{"\n"}
                Evite Produtos com Microplásticos: Muitos produtos de higiene e beleza contêm microplásticos que acabam nos oceanos. Prefira alternativas naturais.{"\n"}{"\n"}
                Recicle Corretamente: Separe os resíduos recicláveis e evite jogar plásticos fora de forma inadequada.
            </Text>
            <Image source={require('../assets/plasticos.png')} style={styles.image} />
            <Text style={styles.sectiontitulo}>Consumo Consciente de Frutos do Mar</Text>
            <Text style={styles.text}>
                Escolha Certificações Sustentáveis: Ao comprar frutos do mar, procure por selos de certificação como o MSC (Marine Stewardship Council), que garantem práticas de pesca sustentável.{"\n"}{"\n"}
                Consuma Espécies Menos Exploradas: Diversifique seu consumo de frutos do mar para reduzir a pressão sobre espécies superexploradas.{"\n"}{"\n"}
                Informe-se sobre Origem e Métodos de Pesca: Prefira frutos do mar provenientes de práticas de pesca sustentável e aquicultura responsável.
            </Text>
            <Text style={styles.sectiontitulo}>Pesca Predatória</Text>
            <Text style={styles.text}>
                A pesca predatória ou sobrepesca é a captura excessiva de espécies marinhas a um ritmo superior ao que elas podem se reproduzir. Isso leva ao declínio de populações de peixes, prejudicando o equilíbrio dos ecossistemas marinhos. Práticas de pesca não seletiva, como o uso de redes de arrasto, também causam danos significativos, capturando espécies não-alvo e destruindo habitats subaquáticos.
            </Text>
            <Text style={styles.sectiontitulo}>Apoio a Políticas Ambientais</Text>
            <Text style={styles.text}>
                Apoie Organizações Ambientais: Contribua para ONGs que trabalham na proteção dos oceanos e na promoção de políticas sustentáveis.{"\n"}{"\n"}
                Vote Conscientemente: Escolha representantes políticos comprometidos com a defesa do meio ambiente e políticas que protejam os oceanos.{"\n"}{"\n"}
                Participe de Campanhas e Petições: Engaje-se em iniciativas que visam a criação de áreas marinhas protegidas e a redução de poluentes.
            </Text>
            <Image source={require('../assets/PoliticasAmbientais.png')} style={styles.image} />
            <Text style={styles.sectiontitulo}>Redução da Pegada de Carbono</Text>
            <Text style={styles.text}>
                Use Transporte Sustentável: Prefira caminhar, andar de bicicleta ou usar transporte público para reduzir as emissões de carbono.{"\n"}{"\n"}
                Economize Energia: Desligue aparelhos eletrônicos quando não estiverem em uso e adote fontes de energia renovável sempre que possível.{"\n"}{"\n"}
                Opte por uma Dieta com Menor Impacto Ambiental: Reduza o consumo de carne e produtos de origem animal, que têm uma pegada de carbono maior.
            </Text>
            <Text style={styles.sectiontitulo}>Participação em Limpezas de Praias e Oceanos</Text>
            <Text style={styles.text}>
                Participe de Mutirões de Limpeza: Engaje-se em eventos locais de limpeza de praias e áreas costeiras para remover resíduos e conscientizar a comunidade.{"\n"}{"\n"}
                Organize Suas Próprias Limpezas: Reúna amigos e familiares para realizar limpezas em locais próximos.{"\n"}{"\n"}
                Eduque e Conscientize: Use suas redes sociais e outros meios para educar as pessoas sobre a importância de manter os oceanos limpos.
            </Text>
            <Image source={require('../assets/LimpezaPraia.png')} style={styles.image} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000', 
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 30,
    },
    subtitulo: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 15,
        lineHeight: 24,
        marginLeft: 20,
        marginRight: 20,
        textAlign: 'justify'
    },
    sectiontitulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
        marginTop: 20,
        marginLeft: 20,
    },
    image: {
        width: 345,
        height: 225,
        marginBottom: 15,
        marginLeft: 20,
    },
});

export default Beneficios;
