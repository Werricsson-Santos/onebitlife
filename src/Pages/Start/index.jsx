import React from "react";
import { ScrollView, View, Image, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import db from "../../Database"

import LifeStatus from "../../Components/Common/LifeStatus";
import DefaultButton from "../../Components/Common/DefaultButton";


export default function Start() {
    const navigation = useNavigation();

    const handleNavAppExplanation = () => {
        db.transaction((tx) => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS habits (id INTEGER PRIMARY KEY AUTOINCREMENT, habitArea TEXT, habitName TEXT, habitFrequency TEXT, habitHasNotification BOOLEAN,
                    habitNotificationFrequency TEXT, habitNotificationTime TEXT, lastCheck TEXT, daysWithoutChecks INTEGER, progressBar INTEGER,
                    habitIsChecked BOOLEAN, habitChecks INTEGER);`
            ,
            [],
            (_, error) => {
                console.log(error);
            }
            );
        });
        navigation.navigate("AppExplanation");
    };

    return(
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ alignItems: "center" }}>
                    <Image source={require("../../assets/icons/logo3.png")} style={styles.logo}/>
                    <LifeStatus />
                    <Text style={styles.description}>
                        Vamos transformar a sua vida {"\n"} em jogo, buscando sempre {"\n"} o melhor nível.
                    </Text>

                    <DefaultButton 
                        buttonText={"Continuar"}
                        handlePress={handleNavAppExplanation}
                        width={250}
                        height={50}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",
    },

    logo: {
        width: 300,
        height: 60,
        marginTop: 60,
        marginBottom: 20,
    },

    description: {
        color: "#FFFFFF",
        fontSize: 20,
        textAlign:"center",
        marginVertical: 60,
    },
})