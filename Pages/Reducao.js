import React from 'react';
import { Text, ScrollView, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';

const Reducao = () => {
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
            <Text style={styles.subtitulo}>Redução de Plásticos: Alternativas Sustentáveis</Text>
            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16, marginBottom: 15, lineHeight: 24, marginLeft: 10, marginRight: 10 }}>
                A redução do uso de plásticos descartáveis é fundamental para proteger os oceanos e o meio ambiente como um todo. Aqui estão algumas orientações sobre como reduzir o uso de plásticos descartáveis e adotar alternativas sustentáveis:
            </Text>
            <Text style={styles.sectiontitulo}>Recuse Plásticos Descartáveis</Text>
            <Text style={styles.text}>
                Sacolas Reutilizáveis: Substitua sacolas plásticas por sacolas reutilizáveis feitas de materiais duráveis, como algodão ou juta.{"\n"}{"\n"}
                Garrafas de Água Reutilizáveis: Utilize garrafas de água reutilizáveis em vez de garrafas de plástico descartáveis. Opte por garrafas feitas de aço inoxidável, vidro ou materiais livres de BPA.{"\n"}{"\n"}
                Canudos Reutilizáveis: Prefira canudos de metal, bambu ou vidro, e carregue um com você para evitar o uso de canudos plásticos descartáveis em restaurantes e cafés.
            </Text>
            <Text style={styles.sectiontitulo}>Opte por Alternativas Biodegradáveis</Text>
            <Text style={styles.text}>
                Produtos de Higiene Pessoal: Escolha produtos de higiene pessoal, como escovas de dentes e cotonetes, feitos de materiais biodegradáveis, como bambu.{"\n"}{"\n"}
                Embalagens Biodegradáveis: Dê preferência a produtos com embalagens biodegradáveis ou compostáveis, que se degradam naturalmente no meio ambiente.{"\n"}{"\n"}
                Utensílios de Cozinha: Utilize utensílios de cozinha feitos de materiais biodegradáveis, como madeira, bambu ou fibra de coco.
            </Text>
            <Text style={styles.sectiontitulo}>Pratique o Descarte Adequado</Text>
            <Text style={styles.text}>
                Recicle: Separe e recicle plásticos sempre que possível, seguindo as diretrizes de reciclagem locais.{"\n"}{"\n"}
                Descarte Responsável: Descarte adequadamente os resíduos plásticos, evitando jogá-los em ambientes naturais, como praias e oceanos.{"\n"}{"\n"}
                Participe de Iniciativas de Limpeza: Junte-se a iniciativas de limpeza de praias e áreas costeiras para ajudar a remover plásticos e outros resíduos do ambiente marinho.
            </Text>
            <Text style={styles.text}>
                Adotar essas práticas pode fazer uma grande diferença na redução do uso de plásticos descartáveis e na proteção dos oceanos e do meio ambiente em geral. Pequenas mudanças de hábitos podem ter um impacto significativo a longo prazo.
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
        marginRight: 20,
        textAlign: 'justify'
    },
    sectiontitulo: {
        marginLeft: 20,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
        marginTop: 20,
    },
});

export default Reducao;
