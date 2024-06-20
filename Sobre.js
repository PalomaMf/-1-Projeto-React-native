import React from 'react';
import { View, Text, StyleSheet } from 'react-native';




const Sobre = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Sobre mim</Text>
            <Text style={styles.texto}>Sou estudante de Análise e Desenvolvimento de Sistemas, apaixonada por tecnologia e desenvolvimento de software.
                Tenho facilidade para trabalhar em equipe, aprender novas tecnologias e me adaptar a diferentes desafios. Busco uma oportunidade de estágio
                onde possa aplicar meus conhecimentos, contribuir para projetos inovadores e crescer profissionalmente no campo de desenvolvimento de sistemas.</Text>
            <Text style={styles.hr}>______________________________________________________</Text>
            <Text style={styles.titulo}>Formação</Text>
            <Text style={styles.texto}>FACULDADE SENAC PERNAMBUCO</Text>
            <Text style={styles.texto}>Março de 2023 - PRESENTE</Text>
            <Text style={styles.texto2}>UNIVERSIDADE FEDERAL DE PERNAMBUCO</Text>
            <Text style={styles.texto}>Março de 2020 - PRESENTE</Text>
            <Text style={styles.hr}>______________________________________________________</Text>
            <Text style={styles.titulo}>Habilidades</Text>
            <Text style={styles.hr}>______________________________________________________</Text>
            <Text style={styles.titulo}>Idiomas</Text>




        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    texto: {
        fontSize: 15,
    },
    texto2: {
        fontSize: 15,
        marginTop: 10,
    },
    hr: {
        width: '100%', // Ajuste conforme necessário
        height: 2, // Altura da linha
        backgroundColor: '#000', // Cor da linha
        marginVertical: 20, // Espaço acima e abaixo da linha
    },
});

export default Sobre;
