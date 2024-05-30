import React from 'react';
import { Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

const Ameaca = () => {
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

    const handleNavigateToForm = () => {
        navigation.navigate('Formulario para Denuncia');
    };

    return (
        <ScrollView style={styles.container}>
            <Image
                source={require('../assets/Fundo.png')}
                style={StyleSheet.absoluteFillObject}
            />
            <Text style={styles.titulo}>WinkOcean</Text>
            <Text style={styles.subtitulo}>Ameaças aos Oceanos</Text>
            <Text style={{textAlign: 'center', color: '#fff', fontSize: 16, marginBottom: 15, lineHeight: 24, marginLeft: 10, marginRight: 10}}>
                Os oceanos, essenciais para a vida na Terra, enfrentam inúmeras ameaças que comprometem sua saúde e biodiversidade. Entre os principais desafios estão a poluição, o aquecimento global, a pesca predatória e a destruição de habitats.
            </Text>
            <Text style={styles.sectiontitulo}>Poluição</Text>
            <Text style={styles.text}>
                A poluição dos oceanos é um problema crítico e multifacetado. Há a contaminação por plásticos, metais pesados, resíduos químicos e esgoto, provenientes de diversas fontes. A poluição afeta diretamente os organismos marinhos, causando danos à saúde e até a morte. Os microplásticos, em particular, são ingeridos por animais de todas as camadas da cadeia alimentar, chegando até aos humanos que os consomem.
            </Text>
            <Image source={require('../assets/poluicao.png')} style={styles.image} />
            <Text style={styles.sectiontitulo}>Aquecimento Global</Text>
            <Text style={styles.text}>
                O aquecimento global, causado pelo aumento das emissões de gases de efeito estufa, está levando ao aumento das temperaturas dos oceanos. Isso tem consequências devastadoras para os ecossistemas marinhos. O branqueamento de corais, causado pelo aumento da temperatura da água, é um dos efeitos mais visíveis. Além disso, o aquecimento global contribui para a elevação do nível do mar, ameaçando as comunidades costeiras e habitats marinhos.
            </Text>
            <Image source={require('../assets/corais.png')} style={styles.image} />
            <Text style={styles.sectiontitulo}>Pesca Predatória</Text>
            <Text style={styles.text}>
                A pesca predatória ou excessiva é a captura de peixes e outros recursos marinhos em um ritmo mais rápido do que eles podem se reproduzir. Isso leva ao declínio das populações de peixes e pode causar o colapso de ecossistemas inteiros. A captura acidental de espécies não-alvo, como golfinhos, tartarugas marinhas e aves, também é uma preocupação significativa. Práticas de pesca sustentável são essenciais para garantir a saúde dos oceanos.
            </Text>
            <Image source={require('../assets/pesca-predatoria.png')} style={styles.image} />
            <Text style={styles.sectiontitulo}>Destruição de Habitats</Text>
            <Text style={styles.text}>
                A destruição de habitats marinhos, como recifes de corais e manguezais, tem um impacto devastador na biodiversidade oceânica. Essas áreas servem de berçário para muitas espécies marinhas e sua destruição reduz a capacidade de suporte dos oceanos. A urbanização costeira, a poluição e a mudança climática são algumas das principais causas da destruição de habitats. É crucial adotar práticas de conservação para proteger esses ecossistemas vitais.
            </Text>
            <TouchableOpacity onPress={handleNavigateToForm} style={styles.button}>
                <Text style={styles.buttonText}>Clique aqui para denunciar ameaças aos oceanos</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
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
    button: {
        backgroundColor: '#0043EF',
        padding: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 20,
        borderRadius: 8,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center'
    },
});

export default Ameaca;
