const wordList = [
    { ee: "server", ru: "сервер" },
    { ee: "klient", ru: "клиент" },
    { ee: "andmebaas", ru: "база данных" },
    { ee: "protokoll", ru: "протокол" },
    { ee: "sõnum", ru: "сообщение" },
    { ee: "võrk", ru: "сеть" },
    { ee: "latentsus", ru: "задержка" },
    { ee: "koormus", ru: "нагрузка" },
    { ee: "skaleeritavus", ru: "масштабируемость" },
    { ee: "vearesistentsus", ru: "отказоустойчивость" },
    { ee: "mikroteenus", ru: "микросервис" },
    { ee: "pilv", ru: "облако" },
    { ee: "koopia", ru: "реплика" },
    { ee: "sünkroniseerimine", ru: "синхронизация" },
    { ee: "puhverdamine", ru: "кэширование" },
    { ee: "liides", ru: "интерфейс" },
    { ee: "marsruutimine", ru: "маршрутизация" },
    { ee: "jagatud ressurss", ru: "общий ресурс" }
];
let currentEeWord = null;
let currentRuWord = null;
let score = 0;
let attempts = 0;
function getRandomWord() {
    const index = Math.floor(Math.random() * wordList.length);
    return wordList[index];
}
function refreshEeWord() {
    currentEeWord = getRandomWord();
    document.getElementById("ee-word").textContent = currentEeWord.ee;
    document.getElementById("ee-answer").value = "";
    document.getElementById("ee-result").textContent = "";
}
function refreshRuWord() {
    currentRuWord = getRandomWord();
    document.getElementById("ru-word").textContent = currentRuWord.ru;
    document.getElementById("ru-answer").value = "";
    document.getElementById("ru-result").textContent = "";
}
function updateScore() {
    document.getElementById("score").textContent = score;
    document.getElementById("attempts").textContent = attempts;
}
function checkAnswer(userInput, correctAnswer, resultEl) {
    attempts++;
    const normalizedInput = userInput.trim().toLowerCase();
    const normalizedCorrect = correctAnswer.trim().toLowerCase();

    if (normalizedInput === normalizedCorrect) {
        score++;
        resultEl.textContent = "Õige!";
        resultEl.className = "result correct";
    } else {
        resultEl.textContent = `Vale. Õige vastus: ${correctAnswer}`;
        resultEl.className = "result wrong";
    }
    updateScore();
}

document.getElementById("ee-check").addEventListener("click", () => {
    const userInput = document.getElementById("ee-answer").value;
    const resultEl = document.getElementById("ee-result");
    checkAnswer(userInput, currentEeWord.ru, resultEl);
});

document.getElementById("ee-refresh").addEventListener("click", refreshEeWord);

document.getElementById("ru-check").addEventListener("click", () => {
    const userInput = document.getElementById("ru-answer").value;
    const resultEl = document.getElementById("ru-result");
    checkAnswer(userInput, currentRuWord.ee, resultEl);
});

document.getElementById("ru-refresh").addEventListener("click", refreshRuWord);
document.getElementById("ee-answer").addEventListener("keydown", (e) => {
    if (e.key === "Enter") document.getElementById("ee-check").click();
});
document.getElementById("ru-answer").addEventListener("keydown", (e) => {
    if (e.key === "Enter") document.getElementById("ru-check").click();
});

refreshEeWord();
refreshRuWord();