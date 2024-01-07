import React from "react";
import { View, StyleSheet } from "react-native";

import LottieView from "lottie-react-native";

export default function LifeStatus() {
/*Status:
    100 - Máximo
    50 - Médio
    25 - Baixo
    00 - Curto (Acabou o jogo)
    No robô, nós temos primeiro Felicidade e depois Saúde xx.xx
*/

    return (
        <View style={styles.container}>
            <LottieView 
                source={require("../../../assets/education/education-100.json")}
                autoPlay
                loop
                style={styles.educacaoAnimacao}
            />

            <LottieView 
                source={require("../../../assets/money/money-100.json")}
                autoPlay
                loop
                style={styles.financasAnimacao}
            />

            <LottieView 
                source={require("../../../assets/robot/robot-100-100.json")}
                autoPlay
                loop
                style={styles.roboAnimacao}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
    },

    roboAnimacao: {
        width: 190,
        marginTop: 30,
        marginLeft: 25,
        position: "absolute"
    },

    educacaoAnimacao: {
        width: 100,
        marginTop: 50,
        marginLeft: 5,
        position: "absolute",
    },

    financasAnimacao: {
        width: 100,
        marginTop: 50,
        marginLeft: 95,
    },
})