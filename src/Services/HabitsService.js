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

const createHabit = (obj) => {
    return new Promise((tx) => {
        `INSERT INTO habits (habitArea, habitName, habitFrequency, habitHasNotification, habitNotificationFrequency, habitNotificationTime,
        lastCheck, daysWithoutChecks, progressBar, habitIsChecked, habitChecks) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            obj.habitArea,
            obj.habitName,
            obj.habitFrequency,
            obj.habitHasNotification,
            obj.habitNotificationFrequency,
            obj.habitNotificationTime,
            obj.lastCheck,
            obj.daysWithoutChecks,
            obj.progressBar,
            obj.habitIsChecked,
            obj.habitChecks
        ],
        (_, {rowsAffected, insertID}) => {
            if (rowsAffected > 0) resolve(insertID)
            else reject("Error inserting obj: " + JSON.stringify(obj));
        },
        (_, error) => reject(error);    
    }); 
};

export default { createHabit };