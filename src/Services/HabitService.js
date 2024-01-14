import db from "../Database"

db.transaction((tx) => {
    `CREATE TABLE IF NOT EXISTS habits 
    (id INTEGER PRIMARY KEY AUTOINCREMENT, habitArea TEXT, habitName TEXT, habitFrequency TEXT, habitHasNotification BOOLEAN,
    habtNotificationFrequency TEXT, habitNotificationTime TEXT, lastCheck TEXT, daysWithoutChecks INTEGER, progressBar INTEGER,
    habitIsChecked BOOLEAN, habitChecks INTEGER);`,
    [],
    (_, error) => {
        console.log(error);
    };
});