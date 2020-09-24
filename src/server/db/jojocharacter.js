const jojocharacter = [
    {
        characterName: "Jotaro Kujo",
        standName: "Star Platinum",
        id: 0
    },
    {
        characterName: "Muhammad Avdol",
        standName: "Magician's Red",
        id: 1
    },
    {
        characterName: "Josesph Joestar",
        standName: "Hermit Purple",
        id: 2
    },
    {
        characterName: "Noriyaki Kakyoin",
        standName: "Hierophant Green",
        id: 3
    },
    {
        characterName: "Jean Pierre Polnareff",
        standName: "Silver Chariot",
        id: 4
    },
    {
        characterName: "Iggy",
        standName: "The Fool",
        id: 5
    },
    {
        characterName: "DIO Brando",
        standName: "The World",
        id: 6
    }
];

/* code gotten from https://github.com/arcuri82/web_development_and_api_design/blob/master/exercise-solutions/quiz-game/part-03/src/quizzes.js#L48 */
function getRandomCharacter(numberOfCharacters) {
    if(numberOfCharacters < 1) {
        throw "Invalid number of characters " + n;
    }

    if (numberOfCharacters > jojocharacter.length) {
        throw "Too many characters";
    }

    const selection = Array(numberOfCharacters);

    let i = 0;
    while (i < numberOfCharacters) {

        const k = Math.floor(jojocharacter.length * Math.random());
        if (selection.includes(k)) {
            continue;
        }

        selection[i] = k;
        i++;
    }

    return Array.from(selection).map(e => jojocharacter[e]);
}

function getAllCharacters() {
    return Array.from(jojocharacter.values());
}

module.exports = {jojocharacter, getRandomCharacter, getAllCharacters};