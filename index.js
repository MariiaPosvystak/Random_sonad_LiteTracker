const wordList = [
    { ee: "server", ru: "сервер" },
    { ee: "klient", ru: "клиент" },
    { ee: "andmebaas", ru: "база данных" },
    { ee: "protokoll", ru: "протокол" },
    { ee: "sõnum", ru: "сообщение" },
    { ee: "võrk", ru: "сеть" },
    { ee: "latentsus", ru: "задержка" },
    { ee: "koormus", ru: "нагрузка" }
];

let currentWord = null;
function getRandomWord() {
    const index = Math.floor(Math.random() * wordList.length);
    return wordList[index];
}
function refreshWord() {
    currentWord = getRandomWord();
    document.getElementById("ee-word").textContent = currentWord.ee;
    document.getElementById("ee-answer").value = "";
    document.getElementById("ee-result").textContent = "";
}
function checkAnswer() {
    const userInput = document.getElementById("ee-answer").value;
    const resultEl = document.getElementById("ee-result");
    const normalizedInput = userInput.trim().toLowerCase();
    const normalizedCorrect = currentWord.ru.trim().toLowerCase();

    if (normalizedInput === normalizedCorrect) {
        resultEl.textContent = "Õige!";
        resultEl.className = "result correct";
    } else {
        resultEl.textContent = `Vale. Õige vastus: ${currentWord.ru}`;
        resultEl.className = "result wrong";
    }
}
document.getElementById("ee-check").addEventListener("click", checkAnswer);
document.getElementById("ee-refresh").addEventListener("click", refreshWord);
refreshWord();