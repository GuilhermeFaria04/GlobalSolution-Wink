import React from 'react';
import { Text, View, TextInput, StyleSheet, Button, Image, Alert, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';

const Denuncia = ({ navigation }) => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [pais, setPais] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [tipo, setTipo] = useState("");
    const [data, setData] = useState(null);
    const [descricao, setDescricao] = useState("");
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDenunciar = () => {
        if (!email || !pais || !cidade || !estado || !tipo || !data || !descricao) {
            Alert.alert(
                "Erro",
                "Por favor, preencha todos os campos obrigatórios.",
                [{ text: "OK" }]
            );
            return;
        }

        Alert.alert(
            "Confirmação",
            "Ao enviar este formulário, você está concordando em fornecer informações precisas e verdadeiras sobre a atividade relatada. Agradecemos sua contribuição para a proteção dos oceanos.",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Confirmar",
                    onPress: () => {
                        console.log("Denúncia enviada");
                        Alert.alert(
                            "Enviada",
                            "Sua denúncia foi enviada aos órgãos responsáveis.",
                            [
                                {
                                    text: "OK",
                                    onPress: () => navigation.navigate('Importancia dos Oceanos')
                                }
                            ]
                        );
                    }
                }
            ]
        );
    };

    const showDatePickerDialog = () => {
        setShowDatePicker(true);
    };

    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || data;
        setShowDatePicker(false);
        setData(currentDate);
    };

    return (
        <ScrollView style={styles.scroll}>
            <Image
                source={require('../assets/Fundo.png')}
                style={StyleSheet.absoluteFillObject}
            />
            <View style={styles.container}>
                <View style={styles.boxdenuncia}>
                    <Text style={styles.titulo}>Informações do Denunciante</Text>
                    <View style={styles.form}>
                        <Text style={styles.label}>Nome</Text>
                        <TextInput 
                            style={styles.textinput}
                            placeholder="Digite seu Nome"
                            value={nome}
                            onChangeText={setNome}
                        />
                        <Text style={styles.label}>Email</Text>
                        <TextInput 
                            style={styles.textinput}
                            placeholder="Digite seu Email"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <Text style={styles.titulo}>Local da Ocorrência</Text>
                        <Text style={styles.label}>País</Text>
                        <TextInput 
                            style={styles.textinput}
                            placeholder="Digite o País da Ocorrência"
                            value={pais}
                            onChangeText={setPais}
                        />
                        <Text style={styles.label}>Estado/Província (se aplicável)</Text>
                        <TextInput 
                            style={styles.textinput}
                            placeholder="Digite o Estado da Ocorrência"
                            value={estado}
                            onChangeText={setEstado}
                        />
                        <Text style={styles.label}>Cidade</Text>
                        <TextInput 
                            style={styles.textinput}
                            placeholder="Digite a Cidade da Ocorrência"
                            value={cidade}
                            onChangeText={setCidade}
                        />
                        <Text style={styles.label}>Coordenadas GPS (se disponíveis)</Text>
                        <TextInput 
                            style={styles.textinput}
                            placeholder="Digite a Latitude"
                            value={latitude}
                            onChangeText={setLatitude}
                        />
                        <TextInput 
                            style={styles.textinput}
                            placeholder="Digite a Longitude"
                            value={longitude}
                            onChangeText={setLongitude}
                        />
                        <Text style={styles.titulo}>Descrição da Ocorrência</Text>
                        <Text style={styles.label}>Tipo de atividade prejudicial</Text>
                        <TextInput 
                            style={styles.textinput}
                            placeholder="Digite o Tipo de atividade"
                            value={tipo}
                            onChangeText={setTipo}
                        />
                        <Text style={styles.label}>Data e hora da ocorrência*</Text>
                        <TouchableOpacity onPress={showDatePickerDialog}>
                            <TextInput 
                                style={styles.textinput}
                                placeholder="Selecione a Data da Ocorrência"
                                value={data ? data.toLocaleDateString() : ''}
                                editable={false}
                            />
                        </TouchableOpacity>
                        {showDatePicker && (
                            <DateTimePicker
                                value={data || new Date()}
                                mode="date"
                                display="default"
                                onChange={onDateChange}
                            />
                        )}
                        <Text style={styles.label}>Descrição detalhada da atividade prejudicial</Text>
                        <TextInput 
                            style={styles.textinput}
                            placeholder="Descreva a atividade"
                            value={descricao}
                            onChangeText={setDescricao}
                            multiline
                        />
                    </View>
                    <Button title='Denunciar' onPress={handleDenunciar} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    scroll: {
        flex: 1,
        backgroundColor: '#000',
    },
    titulo: {
        fontSize: 24,
        color: '#0043EF',
        textAlign: 'center',
        marginBottom: 15,
    },
    boxdenuncia: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
    },
    textinput: {
        borderBottomColor: '#424949',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 8,
        width: '100%',
    },
    form: {
        width: '100%',
    },
    label: {
        fontSize: 16,
        color: '#0043EF',
        marginBottom: 5,
    },
});

export default Denuncia;
