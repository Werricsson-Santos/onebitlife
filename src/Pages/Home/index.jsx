import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import LifeStatus from "../../Components/Common/LifeStatus";
import StatusBar from "../../Components/Home/StatusBar";
import CreateHabit from "../../Components/Home/CreateHabit";
import EditHabit from "../../Components/Home/EditHabit";
import ChangeNavigationService from "../../Services/ChangeNavigationService"
import HabitsService from "../../Services/HabitsService";
import CheckService from "../../Services/CheckService";

export default function Home({ route }) {
    const navigation = useNavigation();
    const [mindHabit, setMindHabit] = useState();
    const [moneyHabit, setMoneyHabit] = useState();
    const [bodyHabit, setBodyHabit] = useState();
    const [funHabit, setFunHabit] = useState();

    const [robotDaysLife, setRobotDaysLife] = useState();
    const today = new Date();

    function handleNavAppExplanation() {
        navigation.navigate("AppExplanation")
    }

    const excludeArea = route.params?.excludeArea;


    useEffect(() => {
        HabitsService.findByArea("Mente").then((mind) => {
            setMindHabit(mind[0]);
        });

        HabitsService.findByArea("Financeiro").then((money) => {
            setMoneyHabit(money[0]);
        });

        HabitsService.findByArea("Corpo").then((body) => {
            setBodyHabit(body[0]);
        });

        HabitsService.findByArea("Humor").then((fun) => {
            setFunHabit(fun[0]);
        });

        if (excludeArea) {
            if (excludeArea == "Mente") {
                setMindHabit(null);
            }
            if (excludeArea == "Financeiro") {
                setMoneyHabit(null);
            }
            if (excludeArea == "Corpo") {
                setBodyHabit(null);
            }
            if (excludeArea == "Humor") {
                setFunHabit(null);
            }
        }

        ChangeNavigationService.checkShowHome(1)
            .then((showHome) => {
                const formDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
                const checkDays = new Date(formDate).getDate() - new Date(showHome.appStartDate).getDate();
                setRobotDaysLife(checkDays.toString().padStart(2, "0"));
            })
            .catch((err) => console.log(err));
    }, [route.params]);

    useEffect(() => {
        CheckService.removeCheck(mindHabit, moneyHabit, bodyHabit, funHabit);
    }, [setMindHabit, setMoneyHabit, setBodyHabit, setFunHabit]);   

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{alignItems: "center"}}>
                    <Text style={styles.dailyChecks}> ❤️ {robotDaysLife} {robotDaysLife === "01" ? "dia" : "dias"}  -  ✔️ 80 checks </Text>

                    <LifeStatus 
                        mindHabit={mindHabit}
                        moneyHabit={moneyHabit}
                        bodyHabit={bodyHabit}
                        funHabit={funHabit}
                    />
                    <StatusBar 
                        mindHabit={mindHabit?.progressBar}
                        moneyHabit={moneyHabit?.progressBar}
                        bodyHabit={bodyHabit?.progressBar}
                        funHabit={funHabit?.progressBar}
                    />

                    {mindHabit ? (
                        <EditHabit habit={mindHabit} checkColor="#90B7F3" />
                    ) : (
                        <CreateHabit habitArea="Mente" borderColor="#90B7F3" />
                    )}
                    
                    {moneyHabit ? (
                        <EditHabit habit={moneyHabit} checkColor="#85BB65" />
                    ) : (
                        <CreateHabit habitArea="Financeiro" borderColor="#85BB65" />
                    )}

                    {bodyHabit ? (
                        <EditHabit habit={bodyHabit} checkColor="#FF0044" />
                    ) : (
                        <CreateHabit habitArea="Corpo" borderColor="#FF0044" />
                    )}

                    {funHabit ? (
                        <EditHabit habit={funHabit} checkColor="#FE7F23" />
                    ) : (
                        <CreateHabit habitArea="Humor" borderColor="#FE7F23" />
                    )}
                    
                </View>

                <Text 
                    style={styles.explanationText} onPress={() => {
                    handleNavAppExplanation();
                }}> Ver explicação novamente </Text>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",
    },

    dailyChecks: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        marginTop: 40,
    },

    explanationText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 15,
        paddingBottom: 25,
    },


})