import db from "../Database"

function animationStatus(
    mindHabit,
    moneyHabit,
    bodyHabit,
    funHabit,
    setMind,
    setMoney,
    setRobot,
) {
    if (
        mindHabit === 0 &&
        moneyHabit === 0 &&
        bodyHabit === 0 &&
        funHabit === 0
    ) {
        setMind("");
        setMoney("");
        setRobot(require("../assets/robot/robot-00-00.json"));
    } else {
        if (mindHabit === 0.25) {
            setMind(require("../assets/education/education-25.json"));
        } else if (mindHabit === 0.5) {
            setMind(require("../assets/education/education-50.json"));
        } else {
        setMind(require("../assets/education/education-100.json"));
        }

        if (moneyHabit === 0.25) {
            setMoney(require("../assets/money/money-25.json"));
        } else if (moneyHabit === 0.5) {
            setMoney(require("../assets/money/money-50.json"));
        } else{
            setMoney(require("../assets/money/money-100.json"));
        }

        if (funHabit === 0.25 && bodyHabit === undefined) {
            setRobot(require("../assets/robot/robot-25-100.json"));
        } else if (funHabit === 0.5 && bodyHabit === undefined) {
            setRobot(require("../assets/robot/robot-50-100.json"));
        } else if (funHabit === 1 && bodyHabit === undefined) {
            setRobot(require("../assets/robot/robot-100-100.json"))
        } else if (funHabit === undefined && bodyHabit === 0.25) {
            setRobot(require("../assets/robot/robot-100-25.json"));
        } else if (funHabit === undefined && bodyHabit === 0.5) {
            setRobot(require("../assets/robot/robot-100-50.json"));
        } else if (funHabit === undefined && bodyHabit === 1) {
            setRobot(require("../assets/robot/robot-100-100.json"));
        } else if (funHabit === 0.5 && bodyHabit === 0.5) {
            setRobot(require("../assets/robot/robot-50-50.json"));
        } else if (funHabit === 0.5 && bodyHabit === 0.25) {
            setRobot(require("../assets/robot/robot-50-25.json"));
        } else if (funHabit === 0.25 && bodyHabit === 1) {
            setRobot(require("../assets/robot/robot-25-100.json"));
        } else if (funHabit === 0.5 && bodyHabit === 1) {
            setRobot(require("../assets/robot/robot-50-100.json"));
        } else if (funHabit === 0.25 && bodyHabit === 0.5) {
            setRobot(require("../assets/robot/robot-25-50.json"));
        } else if (funHabit === 0.25 && bodyHabit === 0.25) {
            setRobot(require("../assets/robot/robot-25-25.json"));
        } else if (funHabit === 1 && bodyHabit === 0.25) {
            setRobot(require("../assets/robot/robot-100-25.json"));
        } else if (funHabit === 1 && bodyHabit === 0.5) {
            setRobot(require("../assets/robot/robot-100-50.json"));
        } else {
            setRobot(require("../assets/robot/robot-100-100.json"));
        }
    }
}


export default { animationStatus }