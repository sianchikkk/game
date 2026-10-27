const inventory = [];
let room = "вход";
let health = 10;
let skill = 2;


function showInventory() {
    if (inventory.length === 0) {
        alert("Рюкзак пуст.");
    } else {
        alert("В рюкзаке: " + inventory.join(", "));
    }
}

alert(
    "potom zamenit \n\n" +
    "найти артефакты для победы над боссом\n" +
    "ключ, амулет, зелье, огромная залупень "
)

while (health > 0) {

    if (room === "вход") {
        const rooms = prompt(
            "ВЫ У ВХОДА\n" +
            "1 — Западный коридор\n" +
            "2 — Восточный коридор\n" +
            "3 — Проверить рюкзак\n" +
            "0 — Завершить игру\n" +
            "4 - центральный коридор"
        );
        if (rooms === "3") {
            showInventory();
        }
        else if (rooms === "1") {
            room = "западный коридор"
            alert("вы прошли по западжному коридору")
        }
        else if (rooms === "2") {
            room = "вотосчный коридор"
            alert("вы прошли по восточному коридору")
        }
        else if (rooms === "4" && inventory.includes("ключ")) {
            room = "центральный коридор"
            alert("вы прошли по центральному коридору")
        }
        else if (rooms === "0" || rooms === null) {
            break;
        }
        else if (rooms === "западный коридор") {
            room = "mainWest"
            alert("внутри комнаты вы стретили Семена")
            if (skill > 1) {
                skill++
                alert("семен побежден")
            }
            else {
                health = health - 1
            }
            const rooms = prompt(
                "ВЫ расправились с врагом перд вами есть 3 пути\n" +
                "1 — 309\n" +
                "2 —???\n" +
                "3 — Проверить рюкзак\n" +
                "0 — Завершить игру\n" +
                "4 - вернуться ко входу"
            );

        }
        else if (rooms === "вотосчный коридор") {
            room = "mainEast"
            alert("внутри комнаты вы стретили Толика торговца")

        }
        const rooms = prompt(
            "ВЫ расправились с врагом перд вами есть 3 пути\n" +
            "1 — Библиотека\n" +
            "2 —Гардероб\n" +
            "3 —Ванная\n" +
            "4 — Проверить рюкзак\n" +
            "0 — Завершить игру\n" +
            "5 - вернуться ко входу"
        );
    }

}
