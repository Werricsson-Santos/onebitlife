import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import LottieView from "lottie-react-native";
import AnimationService from "../../../Services/AnimationService";

export default function LifeStatus({
    mindHabit,
    moneyHabit,
    bodyHabit,
    funHabit,
}) {
/*Status:
    100 - Máximo
    50 - Médio
    25 - Baixo
    00 - Curto (Acabou o jogo)
    No robô, nós temos primeiro Felicidade e depois Saúde xx.xx
*/
const [mind, setMind] = useState();
const [money, setMoney] = useState();
const [robot, setRobot] = useState();

useEffect(() => {
    AnimationService.animationStatus(
        mindHabit?.progressBar,
        moneyHabit?.progressBar,
        bodyHabit?.progressBar,
        funHabit?.progressBar,
        setMind,
        setMoney,
        setRobot
    );
}, [mindHabit, moneyHabit, bodyHabit, funHabit]);

    return (
        <View style={styles.container}>
            <LottieView 
                source={mind}
                autoPlay
                loop
                style={styles.educacaoAnimacao}
            />

            <LottieView 
                source={money}
                autoPlay
                loop
                style={styles.financasAnimacao}
            />

            <LottieView 
                source={robot}
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